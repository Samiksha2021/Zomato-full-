let mongoose = require('mongoose')

let restaurantSchema = new mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        type: String
    },
    contact_No: {
        type: Number
    },
    opening_time: {
        type: Date
    }
})


let Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant