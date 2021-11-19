const express = require('express');
const router = express.Router();
const cartCtrl = require('../../controllers/cart');
const multer = require('multer')
const upload = multer()


router.post('/', isAuthorized, cartCtrl.addItemToCart);


function isAuthorized(req, res, next){
	if(req.user){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}

module.exports = router;