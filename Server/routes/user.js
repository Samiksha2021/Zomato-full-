
const express = require('express');
const router = express.Router();
const User = require('../models/user');
let bcrypt = require('bcrypt')

router.post('/user', async (req, res) => {
    const user = req.body
    console.log(user, "rrr");
    const Email = await User.findOne({ email: user.email })
    if (Email) {
        res.send('user is already register in  our dataBase')
    }
    else {
        user.passWord = await bcrypt.hash(user.passWord, 10)
        const dbUser = new User({
            name: user.name,
            email: user.email.toLowerCase(),
            passWord: user.passWord
        })
        await dbUser.save()
        res.send({ messge: "done" })
    }

});

module.exports = router