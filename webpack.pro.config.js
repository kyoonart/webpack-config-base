// const CleanWbpackPlugin = require('clean-webpack-plugin');
//
// module.exports = {
//     pligins:[
//         new CleanWbpackPlugin()
//     ]
// }

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [new CleanWebpackPlugin()],
};
