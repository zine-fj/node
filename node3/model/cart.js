function Cart() {}

Cart.prototype.getListData = function() {

    return [
        {'name':'111','number':999},
        {'name':'222','number':888}
    ]
}

module.exports = Cart;