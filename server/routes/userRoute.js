const UserModel = require('../models/userModel');
const userRouter = require('express').Router();
const UploadImage = require('../utils/upload');

userRouter.post('/register', UploadImage, async (req, res) => {
    try {
        let { username, password } = req.body;
        let { cloudinaryRes } = req;
        let user = await UserModel.Register(username, password, cloudinaryRes.secure_url);
        res.status(201).json({ user });

    } catch (error) {
        res.status(500).json({ error });
    }

})




module.exports = userRouter;