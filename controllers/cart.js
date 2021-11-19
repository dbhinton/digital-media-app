const Cart = require('../models/cart');

module.exports = {
    addItemToCart
    // updateCart,
    // deleteItemFromCart
}

async function addItemToCart(req, res) {

    try {
        await Cart.findOne({ user: req.user._id }).exec((error, cart) => {
            if (error) res.status(400).json({ error })
            if (cart) {

                const totalCartItemQuantity = req.body.cartItems.quantity
                const product = req.body.cartItems.product;
                const item = cart.cartItems.find(c => c.product == product)

                if (item) {
                    Cart.findOneAndUpdate({ user: req.user._id, 'cartItems.product': product }, {
                        '$set': { 'cartItems.$': {
                            ...req.body.cartItems}, 
                            quantity: item.quantity + totalCartItemQuantity
                        }
                    }).exec((updateCartError, updatedCart) => {
                        if (updateCartError) { res.status(400).json({ updateCartError }) }
                        if (updatedCart) { res.status(201).json({ cart: updatedCart }); }
                    })

                } else {
                    Cart.findOneAndUpdate({ user: req.user._id }, {
                        '$push': { 'cartItems': req.body.cartItems }
                    }).exec((updateCartError, updatedCart) => {
                        if (updateCartError) { res.status(400).json({ updateCartError }) }
                        if (updatedCart) { res.status(201).json({ cart: updatedCart }); }
                    })
                     res.status(200).json({ message: cart })
                }

            } else {
                const newCart = new Cart({
                    user: req.user._id,
                    cartItems: [req.body.cartItems]
                })
                newCart.save((newCartError, c) => {
                    if (newCartError) { res.status(400).json({ newCartError }) }
                    if (c) { res.status(201).json({ cartData: c }); }
                });
            }
        })
    } catch (err) {
        console.log(err, " <- error adding item to cart");
        res.status(400).json({ err });
    }
}