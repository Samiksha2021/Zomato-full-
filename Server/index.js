let mongoose = require('mongoose')
let express = require('express')
let app = express()
let userRoutes = require('./routes/user')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
let cors = require('cors')
app.use(cors())
let loginRoutes = require('./routes/login')
let restaurantRoutes = require('./routes/restaurant')
let productRoutes = require('./routes/product')



mongoose.connect('mongodb://127.0.0.1:27017/zomato').
    then(() => {
        console.log('db connected');

    }).catch((err) => {
        console.log(err);
    })
app.use('/api', userRoutes)
app.use('/api', loginRoutes)
app.use('/api', restaurantRoutes)
app.use('/api', productRoutes)




app.listen(4000, () => {
    console.log("Server running on port 4000");
})