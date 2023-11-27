const UserModel = require('../models/userModel');
const userRouter = require('express').Router();
const UploadImage = require('../utils/upload');

userRouter.get('/', async (req, res) => {
    try {
        const users = await UserModel.FindAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



userRouter.post('/register', UploadImage, async (req, res) => {
    try {
        //create user
        let { username, password, firstName, lastName, email, adress, creditCard, products } = req.body;
        //save image
        let { cloudinaryRes } = req;
        console.log("2");
        console.log(cloudinaryRes);
        let imageUrl = cloudinaryRes != undefined ? cloudinaryRes.secure_url : '';
        let user = await UserModel.Register(username, password, firstName, lastName, email, adress, creditCard, products, imageUrl);
        res.status(201).json({ user });
    }
    catch (error) {
        res.status(500).json({ error });
    }

})

userRouter.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        console.log(email, password);
        let user = await UserModel.Login(email, password);
        if (!user) // if(user == null || user == undefined)
            res.status(401).json({ msg: "incorrect details" });
        else
            res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
});

///messeges between two users 
userRouter.post('/messages', async (req, res) => {
    try {
        const { userId1, userId2 } = req.body;

        if (!userId1 || !userId2) {
            res.status(400).json({ msg: "Both user IDs are required in the request body." });
            return;
        }

        const user1 = await UserModel.FindById(userId1);
        const user2 = await UserModel.FindById(userId2);

        if (!user1 || !user2) {
            res.status(404).json({ msg: "One or both users not found." });
            return;
        }

        const messagesBetweenUsers = user1.messages.filter(message => {
            // Considering a basic two-way communication (where sender and receiver are considered)
            return (
                (message.name === user1.name && message.text.includes(user2.name)) ||
                (message.name === user2.name && message.text.includes(user1.name))
            );
        });

        res.status(200).json(messagesBetweenUsers);
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