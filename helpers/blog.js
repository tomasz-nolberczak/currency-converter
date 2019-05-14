const fs = require("fs");

module.exports = {
    getFiles: function (dir, files_){
        files_ = files_ || [];
        var files = fs.readdirSync(dir);
        for (var i in files){
            var name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()){
                getFiles(name, files_);
            } else {
                files_.push(name);
            }
        }

        return files_.map((file) => file.replace('.md', ''));
    }
};