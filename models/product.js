const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema({

    rating: {type: Number},
    comment: {type: String},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    bid: {type: Number},
    photoURL: {type: String},
    reviews: [reviewsSchema]


},{timestamps: true})



module.exports = mongoose.model('Product', productSchema);