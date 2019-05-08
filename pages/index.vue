<template>
    <div class="row justify-content-center">
        <div class="col-5">
            <Title text="Przelicznik walut"></Title>
            <div class="form-group">
                <label>Liczba</label>
                <input type="number" v-model="amount" class="form-control">
            </div>
            <div class="form-group">
                <label>Waluta pierwotna</label>
                <select v-model="currency" class="form-control">
                    <option disabled selected>-- Wybierz walutę</option>
                    <option v-for="currency in currencies" :value="currency">{{currency}}</option>
                </select>
            </div>
            <div class="form-group mb-5">
                <label>Szukaj waluty wynikowej</label>
                <input type="text" v-model="search" class="form-control">
            </div>
            <div class="row">
                <div class="col-12" v-if="status.isError">
                    <div class="alert alert-danger text-center">
                        Wystąpił błąd podczas pobierania informacji o walutach! Spróbuj ponownie później.
                    </div>
                </div>
                <div class="text-center mx-auto mt-3" v-else-if="status.isLoading">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
                <div v-else v-for="rate in rates" class="col-md-12">
                    <Currency :name="rate.currencyName" :value="rate.value" :amount="amount"
                              :currency="currency"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Currency from './../components/currency';
    import Title from './../components/title';

    export default {
        head: {
            title: "Przelicznik walut"
        },
        transition: 'fade',
        data() {
            return {
                amount: 1,
                currency: "",
                search: "",
                currencies: [],
                rates: [],
                status: {
                    isLoading: false,
                    isError: false
                }
            }
        },
        mounted() {
            this.getRatesForCurrency(this.currency);
            this.setLastChosenCurrency();
        },
        watch: {
            currency(value, oldValue) {
                if (oldValue) {
                    this.getRatesForCurrency(this.currency);
                    this.rememberCurrency();
                    this.search = "";
                }
            },
            search(value) {
                let self = this;

                if (value.length > 0) {
                    self.showCurrenciesNamed(value.toUpperCase());
                } else {
                    self.getRatesForCurrency(self.currency);
                }
            }
        },
        methods: {
            getRatesForCurrency: function (currency) {
                const self = this;
                const url = `https://api.exchangeratesapi.io/latest?base=${currency}`;

                self.rates = [];

                self.toggleLoadingState();

                if (self.isInCache(url) && !self.cacheIsOutdated()) {
                    let rates = self.getFromCache(url);

                    self.storeCurrencies(rates);
                    self.storeCurrenciesAndRates(rates);
                    self.toggleLoadingStateWithDelay();
                } else {
                    fetch(url).then((response) => response.json()).then((json) => {
                        if (typeof json.rates !== "undefined") {
                            self.status.isError = false;

                            self.storeCurrencies(json.rates);
                            self.storeCurrenciesAndRates(json.rates);

                            self.storeInCache(url, json.rates);
                            self.refreshCacheValidityTerm();
                        } else {
                            self.status.isError = true;
                        }

                        self.toggleLoadingStateWithDelay();
                    });
                }
            },

            storeCurrenciesAndRates: function (currencies) {
                let self = this;

                Object.keys(currencies).forEach(function (key) {
                    self.rates.push({
                        currencyName: key,
                        value: currencies[key],
                    })
                });
            },

            storeCurrencies: function (currencies) {
                let self = this;

                if (self.currencies.length === 0) {
                    Object.keys(currencies).forEach(function (key) {
                        self.currencies.push(key);
                    });
                }
            },

            toggleLoadingState: function () {
                this.status.isLoading = !this.status.isLoading;
            },

            toggleLoadingStateWithDelay: function (delay = 1000) {
                setTimeout(() => this.toggleLoadingState(), delay)
            },

            showCurrenciesNamed: function (name) {
                let self = this;

                self.rates = self.rates.filter((currency) => {
                    if (currency.currencyName.includes(name)) return currency;
                });
            },

            rememberCurrency: function () {
                const self = this;

                if (self.currency) self.storeInCache('currency', self.currency);
            },

            setLastChosenCurrency: function () {
                const self = this;

                if (self.isInCache('currency')) {
                    self.currency = self.getFromCache('currency');
                } else {
                    self.currency = "PLN";
                }
            },

            cacheIsOutdated: function () {
                if (!this.isInCache('valid_until')) return true;

                const currentDate = + new Date();
                const cacheValidityDate = + new Date(this.getFromCache('valid_until'));

                return currentDate > cacheValidityDate;
            },

            refreshCacheValidityTerm: function () {
                const today = new Date();
                const tomorrow = new Date();

                tomorrow.setDate(today.getHours() + 1);

                this.storeInCache('valid_until', tomorrow);
            },

            isInCache: function (key) {
                return !!localStorage.getItem(key);
            },

            getFromCache: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },

            storeInCache: function (key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            },
        },
        layout: 'main',
        components: {Currency, Title}
    }
</script>