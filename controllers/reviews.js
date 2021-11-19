const Product = require('../models/product')
const Review = require('../models/review')

module.exports = {
    create,
    updateReview,
    deleteReview
}

async function create(req,res){
    try{
        const productDocument = await Product.findById(req.params.id)
        if(req.user){
            productDocument.reviews.push(req.body)
            productDocument.save(function(err){
                res.redirect(`/products/${req.params.id}`)
            })
        }
    }catch(err) {
        res.send(err)
    }
}


function deleteReview(req, res){
    console.log("running delete review")
        Product.findById(req.params.pid, function(err, product){
            console.log("product reviews", product.reviews.id(req.params.rid))
            product.reviews.id(req.params.rid).remove()
            product.save(function(e){
                res.redirect(`/products/${req.params.pid}`)
            })    
        })
}

function updateReview(req, res) {
    Product.findById(req.params.pid, function(err, product) {
      const reviewSubdoc = product.reviews.id(req.params.rid);
      console.log(reviewSubdoc, "<---review subdoc****")
      reviewSubdoc.content = req.body.content;
      product.save(function() {
        res.redirect(`/products/${product._id}`);
      });
    });
  }