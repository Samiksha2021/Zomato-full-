const express = require('express');
const router = express.Router();
let Product = require('../models/Product');
const Restaurant = require('../models/Restaurant');


//  create api for product
// router.post('/product', async (req, res) => {
//     console.log(req.body, "rrrr");
//     try {
//         let product = new Product(req.body)
//         await product.save()
//         res.status(201).send(product)
//     }
//     catch (err) {
//         console.log(err, 'errrr');
//         res.status(402).send('err')

//     }

// })


router.post('/product', async (req, res) => {
    console.log(req.body, "rrrr");
    try{
        const{name,description,price,image,restroId}= req.body;

        const restaurant= await Restaurant.findById(restroId);
        console.log(restaurant,"rrr");
        if(!restaurant){
            return res.status(404).json("Restaurant not found!! ")
        }
        const product= new Product({
            name,
            description,
            image,
            price,
            restaurant:restroId
        });
        await product.save();
        res.status(201).json(product);
    }
    catch(err){
        console.error(err);
        res.status(500).json('Server error');
    }
})


//   get all product 
router.get('/product', async (req, res) => {

    try {
        let product = await Product.find()
        if (!product) {

            res.send('product not foundddd')

        }
        else {
            res.send(product)
        }

    }
    catch {

    }

})
router.get('/product/:id', async (req, res) => {


    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            res.status(404).send('not founddddd')

        }
        else {
            res.send(product)
        }

    }
    catch {
        res.send('err')
    }

})

//  update product
router.patch('/product/:id', async (req, res) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (product) {
            res.send(product)
        }
        else {
            res.send('not foundddddd not updateddddd')
        }

    }
    catch (err) {
        console.log('errr', err);
    }

})



router.delete('/product/:id', async (req, res) => {

    try {
        let product = await Product.findByIdAndDelete(req.params.id, { new: true })
        if (!product) {
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