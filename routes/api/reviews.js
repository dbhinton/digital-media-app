var router = require('express').Router()
const reviewsCtrl = require('../../controllers/reviews')

router.post('/products/:id/reviews', isAuthorized, reviewsCtrl.create)
router.put('/products/:pid/reviews/:rid',isAuthorized, reviewsCtrl.updateReview)
router.delete('/products/:pid/reviews/:rid',isAuthorized, reviewsCtrl.deleteReview)



function isAuthorized(req, res, next){
	if(req.user){
		return next()
	} else {
		res.status(401).json({message: 'Not Authorized'})
	}

}

module.exports = router;