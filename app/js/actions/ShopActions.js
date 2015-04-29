var AppDispatcher = require('../common/AppDispatcher');
var AppConst = require('../common/AppConst');

var ShopActions = {
    changeQuantity: function (action) {
         return AppDispatcher.dispatch({
            type: AppConst.CHANGE_QUANTITY,
            action: action
        });
    }
};

module.exports = ShopActions;