const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// export
module.exports = {
    //parcel index.html
    //������ �о���̱� �����ϴ� ������ ����
    entry:'./js/main.js',
    output:{
        //path: path.resolve(__dirname, 'public'),
        //filename:'main.js',
        clean: true
    },
    module:{
            rules:[
            {
                test:/\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            }    
        ]  
    },
    //���鸵 �� ������� ó�� ��� �� �پ��� �÷����ε��� ����
    plugins:[
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns:[
                {from: 'static'}
            ]
        })
    ],
    
    devServer:{
        host:'localhost'
    }
}