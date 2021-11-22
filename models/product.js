const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {
        type: String,
        uppercase: true,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String, 
        required: true
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
    }


},{timestamps: true})



module.exports = mongoose.model('Product', productSchema);