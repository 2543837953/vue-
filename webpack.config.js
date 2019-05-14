const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const {VueLoaderPlugin}=require("vue-loader")
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},//处理css文件的loader
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},//处理less文件的loader
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},//处理sass文件的loader
            {test:/\.(gif|jpg|png|jpeg|bmp)$/,use:"url-loader?name=[name].[ext]"},//处理图片路径的loader
            //limit 给定的值，是图片的大小，单位是byte，如果我们引用的图片，大于或等于给定的
            // limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值,则会被转为base64的字符串   
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:"vue-loader"},
            {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader'},//处理文字路径的loader
        ]

    },
    // resolve:{
    //     alias:{
    //         "vue$":"vue/dist/vue.js"
    //     }
    // }
}