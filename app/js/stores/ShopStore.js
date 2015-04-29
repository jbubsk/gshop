var AppDispatcher = require('../common/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConst = require('../common/AppConst');
var assign = require('object-assign');

/* todo move here functionality from ProductService */

var CHANGE_EVENT = 'change';

var _store = {
    phones: [

        {
            id: 'iphone4s',
            data: {
                name: 'iPhone 4s',
                price: 400,
                quantity: 3,
                discountInPercent: 15
            }
        },
        {
            id: 'iphone5',
            data: {
                name: 'iPhone 5',
                price: 500,
                quantity: 30,
                discountInPercent: 5
            }
        },
        {
            id: 'iphone5s',
            data: {
                name: 'iPhone 5s',
                price: 600,
                quantity: 10,
                discountInPercent: 5
            }
        },
        {
            id: 'iphone6',
            data: {
                name: 'iPhone 6',
                price: 700,
                quantity: 14,
                discountInPercent: 5
            }
        },
        {
            id: 'iphone6plus',
            data: {
                name: 'iPhone 6 Plus',
                price: 800,
                quantity: 4,
                discountInPercent: 10
            }
        }
    ],
    clothes: [

        {
            id: 'jeans',
            data: {
                name: 'Jeans',
                price: 100,
                quantity: 34,
                discountInPercent: 15
            }
        },
        {
            id: 'skirt',
            data: {
                name: 'Skirt',
                price: 50,
                quantity: 34,
                discountInPercent: 5
            }
        },
        {
            id: 'tshort',
            data: {
                name: 'T-Short',
                price: 60,
                quantity: 34,
                discountInPercent: 5
            }
        },
        {
            id: 'gloves',
            data: {
                name: 'Gloves',
                price: 70,
                quantity: 34,
                discountInPercent: 5
            }
        },
        {
            id: 'hat',
            data: {
                name: 'Hat',
                price: 80,
                quantity: 34,
                discountInPercent: 10
            }
        }
    ]
};

var ShopStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getProduct: function (params) {
        var result;
        if (params.category === 'phones') {
            result = ShopStore.getPhoneById(params.id);
        } else if (params.category === 'clothes') {
            result = ShopStore.getClotheById(params.id);
        } else {
            for (var prod in _store) {
                if (_store.hasOwnProperty(prod)) {
                    _store[prod].every(function (item) {
                        if (item.id === params) {
                            result = item.data;
                            return false;
                        }
                        return true;
                    });
                }
            }
        }
        return result;
    },

    getClotheById: function (id) {
        var product = null;
        _store.clothes.every(function (item) {
            if (item.id === id) {
                product = item.data;
                return false;
            }
            return true;
        });
        return product;
    },

    getPhoneById: function (id) {
        var product = null;
        _store.phones.every(function (item) {
            if (item.id === id) {
                product = item.data;
                return false;
            }
            return true;
        });
        return product;
    },

    canBeQuantityIncreased: function (id) {
        return ShopStore.getProduct(id).quantity > 0;
    },

    getClothes: function (callback) {

        /*    ajax.send({
         success: function (data) {
         callback(null, data);
         },
         error: function (error) {
         callback(error, null);
         }
         });*/
        callback(null, _store.clothes);
    },
    getPhones: function (callback) {

        /*    ajax.send({
         success: function (data) {
         callback(null, data);
         },
         error: function (error) {
         callback(error, null);
         }
         });*/
        callback(null, _store.phones);
    },

    changeQuantityForProduct: function (payload) {
        var result = false;

        _store[payload.action.category].forEach(function (product) {
            if (product.id === payload.action.id) {
                if (payload.action.action === 'plus') {
                    product.data.quantity--;
                } else {
                    product.data.quantity++;
                }
                result = true;
                return false;
            } else {
                return true;
            }
        });
        return result
    }

});

ShopStore.dispatchToken = AppDispatcher.register(function (payload) {
    switch (payload.type) {
        case AppConst.CHANGE_QUANTITY:
            if (ShopStore.changeQuantityForProduct(payload)) {
                var BasketStore = require('./BasketStore');
                BasketStore.changeQuantityForProduct(payload.action);
                BasketStore.emitChange();
                ShopStore.emitChange();
            }
            break;
    }
});

module.exports = ShopStore;