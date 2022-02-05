const path = require("path");
// /FRONTEND/vue/appiness/mang/build/
module.exports = {
     publicPath:process.env.NODE_ENV === 'production'? '/elment-ui/build/': '/',
     outputDir: path.resolve(__dirname, "build"),      
 }