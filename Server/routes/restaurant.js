const express = require('express');
const router = express.Router();
let Restaurant = require('../models/Restaurant')


//  create api for restaurant

router.post('/restro', async (req, res) => {
    console.log(req.body, "trrrr");
    try {
        let restaurant = new Restaurant(req.body)
        await restaurant.save()
        res.status(201).send(restaurant)
    }
    catch (err) {
        console.log(err, 'errrr');
        res.status(402).send('err')

    }

})


//   get all Restaurant 
router.get('/restro', async (req, res) => {

    try {
        let restaurant = await Restaurant.find()
        if (!restaurant) {

            res.send('restaurant not foundddd')

        }
        else {
            res.send(restaurant)
        }

    }
    catch {

    }

})



router.get('/restro/:id', async (req, res) => {


    try {
        let restaurant = await Restaurant.findById(req.params.id)
        if (!restaurant) {
            res.status(404).send('not founddddd')

        }
        else {
            res.send(restaurant)
        }

    }
    catch {
        res.send('err')
    }

})

//  update restraurant



router.patch('/restro/:id', async (req, res) => {
    try {
        let restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (restaurant) {
            res.send(restaurant)
        }
        else {
            res.send('not foundddddd not updateddddd')
        }

    }
    catch (err) {
        console.log('errr', err);
    }

})



router.delete('/restro/:id', async (req, res) => {

    try {
        let restaurant = await Restaurant.findByIdAndDelete(req.params.id, { new: true })
        if (!restaurant) {
            res.send('not founddd')
        }
        else {
            res.send('deletedd')
        }

    }
    catch {
        res.send('errrrrr')
    }



})


module.exports = router