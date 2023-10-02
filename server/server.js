
const express = require('express');

const mongoose = require('mongoose');

const app = express();


app.get('/api', (req, res) => {

    res.json({ "users": ["userOne", "userTwo"] })

});







mongoose.connect('https://mongodb+srv://etgarbeg:xqbHZKp06i4ZG8vd@cluster0.zqcb5gw.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    userName: String,

    email: String,

});
app.get('https://eu-central-1.aws.data.mongodb-api.com/app/data-vnycj/endpoint/data/v1', async (req, res) => {
    try {
        const user = await User.findById(req.params.Id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user data' });
    }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





app.listen(5000, () => console.log('Server started on port 5000'));



