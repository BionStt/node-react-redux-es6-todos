import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './router';

const app = express();

app.use(bodyParser.json());

app.use('/', routes);



if (config.port) {
    app.listen(config.port, null, null, (err) => {
        if (err) {
            console.error(err);
        }
        console.info('----\n==> API is running on port %s', config.port);
        console.info('==> Send requests to http://%s:%s', config.host, config.port);
    });
} else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
}