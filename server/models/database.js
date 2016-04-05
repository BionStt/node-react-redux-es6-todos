var pg = require('pg');
var config =  require ('../config');

var connectionString = process.env.DATABASE_URL || config.connectionString;

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, completed BOOLEAN)');
query.on('end', function () {
    client.end();
});