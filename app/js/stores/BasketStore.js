var AppDispatcher = require('../common/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConst = require('../common/AppConst');
var ProductService = require('../services/ProductService');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _basket = {};

function addProductToBasket(action) {
    var product;
    if (action.category === 'phones') {
        product = ProductService.getPhoneById(action.identifier);
    }
    if (action.category === 'clothes') {
        product = ProductService.getClothesById(action.identifier);
    }
    _basket[action.identifier] = {
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
        if (!_basket[action.identifier]) {
            addProductToBasket(action);
        }
        if (action.quantity === 0) {
            delete _basket[action.identifier];
        } else {
            _basket[action.identifier].quantity = action.quantity;
            evaluateTotal(action.identifier);
        }
    }
});

BasketStore.dispatchToken = AppDispatcher.register(function (action) {
    switch (action.type) {
        case AppConst.CHANGE_QUANTITY:
            BasketStore.changeQuantityForProduct(action);
            BasketStore.emitChange();
            break;
    }
});

module.exports = BasketStore;