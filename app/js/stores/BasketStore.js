var AppDispatcher = require('../common/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ShopStore = require('./ShopStore');
var AppConst = require('../common/AppConst');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _basket = {};

function addProductToBasket(action) {
    var product;
    if (action.category === 'phones') {
        product = ShopStore.getPhoneById(action.id);
    }
    if (action.category === 'clothes') {
        product = ShopStore.getClotheById(action.id);
    }
    _basket[action.id] = {
        name: product.name,
        price: product.price,
        category: action.category,
        quantity: 0,
        total: 0
    };
}

function evaluateTotal(identifier) {
    for (var id in _basket) {
        if (_basket.hasOwnProperty(id) && identifier === id) {
            _basket[id].total = _basket[id].quantity * _basket[id].price;
            return;
        }
    }
}

var BasketStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getTotalForProduct: function (identifier) {
        return _basket[identifier] ? _basket[identifier].total : 0;
    },

    getTotal: function () {
        var total = 0;
        for (var id in _basket) {
            if (_basket.hasOwnProperty(id)) {
                total += _basket[id].total;
            }
        }
        return total;
    },

    getBasket: function (category) {
        var result = [];

        if (category) {
            for (var prod in _basket) {
                if (_basket.hasOwnProperty(prod) && _basket[prod].category === category) {
                    result.push(_basket[prod]);
                }
            }
        } else {
            result = _basket;
        }
        return result;
    },

    getBasketItem: function (identifier) {
        var result;
        for (var prod in _basket) {
            if (_basket.hasOwnProperty(prod) && prod === identifier) {
                result = _basket[prod];
                break;
            }
        }
        return result;
    },

    changeQuantityForProduct: function (action) {
        if (!_basket[action.id]) {
            addProductToBasket(action);
        }
        if (action.quantity === 0) {
            delete _basket[action.id];
        } else {

            if (action.action === 'plus') {
                _basket[action.id].quantity++;
            } else {
                _basket[action.id].quantity--;
            }
            evaluateTotal(action.id);
        }
    }
});

BasketStore.dispatchToken = AppDispatcher.register(function (payload) {
    switch (payload.type) {
        case AppConst.BUY:
            /* todo purchase imitation */
            break;
    }
});

module.exports = BasketStore;