const express = require('express');
const router = express.Router();
const cartCtrl = require('../../controllers/reviews');


router.post('/user/cart/reviews', isAuthorized, cartCtrl.addComment);

function isAuthorized(req, res, next){
	if(req.user){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}

module.exports = router;