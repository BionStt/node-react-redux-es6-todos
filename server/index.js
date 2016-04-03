import express from 'express';
import bodyParser from 'body-parser';
import routes from './router';
import path from 'path';

const app = express();
const static_path = path.join(__dirname, 'public');


app.use(bodyParser.json());

app.use('/', routes(app, static_path));


var isDevelopment = (process.env.NODE_ENV !== 'production');
console.log('is development:', isDevelopment);


if (isDevelopment) {
    var webpack = require('webpack');
    var webpackConfig = require('./../webpack.config');
    var WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true
    }).listen(3001, 'localhost', function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log('webpack-dev-server Listening at localhost:3001');
    });
}