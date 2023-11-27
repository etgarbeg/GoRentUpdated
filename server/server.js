const { MongoClient } = require('mongodb');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5500;


const server = express();

server.use(cors());
server.use(express.json({ limit: '1000mb' }));
server.use('/api/users', require('./routes/userRoute'))


const db_uri = process.env.DB_URI;
const db_name = process.env.DB_NAME;

const client = new MongoClient(db_uri);

client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
        console.log(db_name, db_uri)
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });




// Express Server

server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);

});

