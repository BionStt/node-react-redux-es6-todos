/**
 * Todos Route
 * path: /todos
 ******************** */


import express from 'express';
import { connectionString } from '../config';


const router = express.Router();

router.get('/', getTodos);
router.post('/', postTodo);
router.put('/:id', putTodo);
router.delete('/:id', deleteTodo);


var pg = require('pg');

function getTodos(req, res) {
    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function (err, client, done) {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        returnCurrentData(client, results, done, res);

    });
}

function postTodo(req, res) {

    var results = [];

    // Grab data from http request
    var data = { text: req.body.text, completed: false };
    console.log(data);

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function (err, client, done) {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Insert Data
        client.query("INSERT INTO items(text, completed) values($1, $2)", [data.text, data.completed]);

        returnCurrentData(client, results, done, res);

    });
}

function putTodo(req, res) {
    var results = [];

    // Grab data from the URL parameters
    var id = req.params.id;

    // Grab data from http request
    var data = { text: req.body.text, completed: req.body.completed };

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function (err, client, done) {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).send(json({ success: false, data: err }));
        }

        // SQL Query > Update Data
        client.query("UPDATE items SET text=($1), completed=($2) WHERE id=($3)", [data.text, data.completed, id]);

        returnCurrentData(client, results, done, res);
    });
}

function deleteTodo(req, res) {
    var results = [];

    // Grab data from the URL parameters
    var id = req.params.id;


    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function (err, client, done) {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Delete Data
        client.query("DELETE FROM items WHERE id=($1)", [id]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM items ORDER BY id ASC");

        returnCurrentData(client, results, done, res);
    });
}



function returnCurrentData(client, results, done, res) {
    // SQL Query > Select Data
    var query = client.query("SELECT * FROM items ORDER BY id ASC");

    // Stream results back one row at a time
    query.on('row', function (row) {
        results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function () {
        done();
        return res.json(results);
    });
}


export default router;