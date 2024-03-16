const express = require('express');

const UserModel = require('../models/userModel');
const userRouter = express.Router();
const UploadImage = require('../utils/upload');

userRouter.get('/', async (req, res) => {
    try {
        const users = await UserModel.FindAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



userRouter.post('/login', async (req, res) => {
    try {

        let { email, password } = req.body;

        let user = await UserModel.Login(email, password);
        if (!user)
            res.status(401).json({ msg: "Incorrect details" });
        else
            res.status(200).json(user);
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: error.message }); // Send a more descriptive error message to the client
    }
});



// userRouter.js

userRouter.post('/sendRentRequest', async (req, res) => {
    try {
        const { currentUser, userWithProduct, product } = req.body;

        const rentRequest = await UserModel.sendRentRequest(currentUser, userWithProduct, product);

        res.status(200).json(rentRequest);
    } catch (error) {
        console.error('Rent request failed. Please try again.', error);
        res.status(500).json({ error: 'Rent request failed' });
    }
});














userRouter.post('/register', async (req, res) => {
    try {
        // Extract user data from the request body
        const { username, password, firstName, lastName, email, country, city } = req.body;

        // Call the simplified Register method
        const user = await UserModel.Register(username, password, firstName, lastName, email, country, city);

        res.status(201).json({ user });
    } catch (error) {
        console.error('Registration failed. Please try again.', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});






///messeges between two users 
userRouter.post('/messages', async (req, res) => {
    try {
        const {  senderID,
            receiverID,
            txt,
            productRequestedID,
            timeStemp} = req.body;
           

        if (!senderID || !receiverID || !txt || !productRequestedID||!timeStemp) {
            res.status(400).json({ msg: "Missing message details in the request body." });
            return;
        }

        // Find sender and receiver users
        const senderUser = await UserModel.FindById(senderID);
        const receiverUser = await UserModel.FindById(receiverID);

        if (!senderUser || !receiverUser) {
            res.status(404).json({ msg: "One or both users not found." });
            return;
        }

        // Add the message to sender's messages array
        const message = await UserModel.sendMessage(senderID,receiverID,txt,productRequestedID,timeStemp);


        // Update sender in the database
        await UserModel.updateUser(senderUser);

        res.status(200).json({ msg: "Message sent successfully." });
    } catch (error) {
        res.status(500).json({ error });
    }
});
// { username: "newUsername", email: "newEmail@example.com", ...otherFields }
// Express route handler for updating a user's profile based on form data
userRouter.post('/update-profile/:userId', async (req, res) => {
    const userId = req.params.userId;
    const updatedProfile = req.body; // Assuming form data is sent in the request body

    try {
        await UserModel.updateProfile(userId, updatedProfile);
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

userRouter.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        const users = await UserModel.SearchUsers(query);

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error }); s
    }
});



module.exports = userRouter;