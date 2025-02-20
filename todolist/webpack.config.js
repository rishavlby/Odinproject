const path = require("path");
const { dependencies } = require("webpack");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist"),
        clean:true
    },

    devServer: {
        static: {
            directory:path.join(__dirname, "dist"),

        },
        port: 1600,
        open: true, // Automatically opens the browser
        hot: true,  // Enable hot module replacement
    },

};