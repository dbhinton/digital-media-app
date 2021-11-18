const Cart = require('./models/Cart');

module.exports{
    addItemToCart,
    updateCart,
    deleteItemFromCart
}

async function addItemToCart(req, res){

    try{
        await Cart.findOne({user: req.user._id}).exec((error, cart) => {
            if(error) return re.status(400).json({ error })
            if(cart){
                await Cart.findOneAndUpdate({user: req.user._id},{
                    '$push': {'cartItems': req.body.cartItems}
                }).exec((error, _cart) => {
                    if(error) return re.status(400).json({ error })
                    if(_cart){ return res.status(201).json({ cart: _cart });}
                })
                res.staus(200).json({ message: cart })
            }else{
                const cart = new Cart({
                    user: req.user._id,
                    cartItems: [req.body.cartItems]
                })
                await cart.save((error, cart) => {
                    if(error){ return res.status(400).json({error})}
                    if(cart){ return res.status(201).json({ cart });}
                });
            }
        })
    }catch(err){
        console.log(err, " <- error adding item to cart");
        res.status(400).json({err});
    }
}