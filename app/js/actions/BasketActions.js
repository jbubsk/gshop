var AppDispatcher = require('../common/AppDispatcher');
var AppConst = require('../common/AppConst');

var BasketActions = {
    buy: function () {
        AppDispatcher.dispatch({
            type: AppConst.BUY
        });
    }
};

module.exports = BasketActions;