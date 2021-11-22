const Product = require('../models/product');
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();
const {v4: uuidv4} = require("uuid");
const BUCKET_NAME = process.env.BUCKET_NAME;


module.exports = {
    createProduct,
    productIndex,
  };


  function createProduct(req, res) {

  
    //Upload the file to AWS
    const filePath = `${uuidv4()}/${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key : filePath, Body: req.file.buffer };
    // exactly like signup we did yesterday, so look at the signup function
    s3.upload(params, async function (err, data) {
  
      try {
        console.log(err, " < - error from aws in the product create");
        if(err instanceof Error){
          throw new Error(err)
        }

        const { name, price, description } = req.body
        const newProduct = {
          photoUrl: data.Location,
          createdBy: req.user, 
          name: name.trim(), 
          price: price, 
          description: description.trim()
        }
        const product = await Product.create(newProduct);
        res.status(201).json({ data: product });
        
      } catch (error) {
        console.log(error)
        res.status(400).json(error);
      }
    });
}


function deleteProduct(req, res){
  Product.findById()

}


    async function productIndex(req, res) {
        try {
          // this populates the user when you find the products
          // so you'll have access to the users information
          // when you fetch teh products
          const products = await Product.find({}).populate("createdBy").exec();
          console.log('200 productindex')
          res.status(200).json({ products: products });
          console.log(products, 'these are products')
        } catch (err) {
          console.log('error message in produt index')
          res.status(400).json({ err });
        }
      }