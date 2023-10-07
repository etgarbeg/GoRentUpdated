import express from 'express';

import mongoose from 'mongoose';
import { useState } from 'react';
import cors from 'cors';
import axios from 'axios';

const app = express();
const uri = 'mongodb+srv://etgarbeg:xqbHZKp06i4ZG8vd@cluster0.zqcb5gw.mongodb.net/GoRentDB';

app.use(cors());
mongoose.connect(uri);
// Event listener for a successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB via URI:', uri);
});

// Event listener for connection error
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});



const UserSchema = mongoose.Schema({
    name: String,
    age: Number
})

const UserModel = mongoose.model("users", UserSchema);


app.get('/users', async (req, res) => {
    try {
        const Allusers = await UserModel.find({});
        res.json(Allusers);

        console.log(Allusers)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// Express Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

