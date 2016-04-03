import todos from './routes/routes_todos';
import config from './config';
import express from 'express';

const router = express.Router();
const port = process.env.PORT || config.port;

export default function (app, path) {

    router.use('/todos', todos(router));
    
    app.use(express.static(path))
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

    return router;
}