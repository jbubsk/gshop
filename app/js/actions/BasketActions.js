var ShopStore = require('../stores/ShopStore');
var AppDispatcher = require('../common/AppDispatcher');
var BasketStore = require('../stores/BasketStore');
var BasketConst = require('../common/AppConst');

var BasketActions = {
    changeQuantity: function (action) {
        AppDispatcher.dispatch({
            type: BasketConst.CHANGE_QUANTITY,
            category: action.category,
            identifier: action.identifier,
            quantity: action.quantity
        });
    }
};

module.exports = BasketActions;