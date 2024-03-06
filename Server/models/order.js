let mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
    
    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    restaurant_id:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Restaurant"
    }],
    price:{
        type:Number
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered'],
        default: "pending"
    }

   
})


let Order = mongoose.model('Order', orderSchema)
module.exports = Order