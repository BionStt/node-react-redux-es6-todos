import express from 'express';
import bodyParser from 'body-parser';
import Router from './router';
import path from 'path';
import { port as listenPort } from './config';


const app = express();
const static_path = path.join(__dirname, 'public');
const port = process.env.PORT || listenPort;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/api/', routes(app, static_path));


var isDevelopment = (process.env.NODE_ENV !== 'production');
console.log('is development:', isDevelopment);


Router.forEach(route => {
    app.use(route.path, route.handler);
});


app.use(express.static(static_path))
    .get('/', function (req, res) {
        res.sendFile('index.html', {
            root: path
        });
    }).listen(port, function (err) {

    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening at localhost:${port}`);
    }
});


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