const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

// define a post endpoint to add a User with phone and password to the database
router.post('/add', async (req, res) => {
    const { phoneNumber, password } = req.body;
    console.log(phoneNumber, password)
    const user = new User({ phoneNumber: phoneNumber, password: password });
    try {
        await user.save();
        return res.json({ user });
    } catch (err) {
        console.log(err);
        return res.status(422).send(err.message);
    }
});


module.exports = router;

