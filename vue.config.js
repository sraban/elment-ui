const path = require("path");
module.exports = {
     publicPath:process.env.NODE_ENV === 'production'? '/FRONTEND/vue/appiness/mang/build/': '/',
     outputDir: path.resolve(__dirname, "build"),      
 }