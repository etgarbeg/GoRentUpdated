const UserModel = require('../models/userModel');
const userRouter = require('express').Router();
const UploadImage = require('../utils/upload');

userRouter.post('/register', UploadImage, async (req, res) => {
    try {
        //create user
        let { username, password, firstName, lastName, email, adress, creditCard, products, requested } = req.body;
        //save image
        let { cloudinaryRes } = req;
        let user = await UserModel.Register(username, password, firstName, lastName, email, adress, creditCard, products, requested, cloudinaryRes.secure_url);
        res.status(201).json({ user });

    } catch (error) {
        res.status(500).json({ error });
    }

})




module.exports = userRouter;