//using express
const express = require('express');
//using mongoDB
const mongoose = require('mongoose');
//create express object.
const app = express();

// Set up MongoDB connection - change adress
try {
    await mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });
    console.log('MongoDB connected');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

// Define routes
app.get('/', (req, res) => {
    try {
        res.send('app');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
// Start server
app.listen(3000, () => console.log('Server started on port 3000'));



