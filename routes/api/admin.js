const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/admin');
const multer = require('multer')
const upload = multer()


/*---------- Public Routes ----------*/
router.post('/admin/signup', upload.single('photo'), adminCtrl.signup);
router.post('/admin/login', adminCtrl.login);
router.get('/:username', adminCtrl.profile);


/*---------- Protected Routes ----------*/
function isAuthorized(req, res, next){
	if(req.user){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}



module.exports = router;