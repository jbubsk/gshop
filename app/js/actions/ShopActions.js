var ShopStore = require('../stores/ShopStore');
var BasketStore = require('../stores/BasketStore');
var BasketConst = require('../common/AppConst');

var ShopActions = {
    changeQuantity: function (quantity) {
        BasketStore.emit(BasketConst.CHANGE_QUANTITY, quantity);
    },
    buy: function () {
        BasketStore.emit(BasketConst.BUY);
    }
};

module.exports = ShopActions;