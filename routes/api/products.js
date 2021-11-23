const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');
const multer = require('multer')
const upload = multer()


router.get('/', productsCtrl.productIndex)
router.post('/', upload.single('photo'), productsCtrl.createProduct);
router.delete('/', isAuthorized, productsCtrl.deleteProduct);

function isAuthorized(req, res, next){
	if(req.user.role === 'admin'){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}

module.exports = router;