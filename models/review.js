const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({

    rating: {type: Number},
    comment: {type: String},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedAt: Date
  },{timestamps: true})


  module.exports = mongoose.model('Review', reviewSchema);