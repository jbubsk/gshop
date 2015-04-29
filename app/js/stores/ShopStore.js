var AppDispatcher = require('../common/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConst = require('../common/AppConst');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _store = {
    phones: [

    {
        id: 'iphone4s',
        name: 'iPhone 4s',
        data: {
            price: 400,
            quantity: 3,
            discountInPercent: 15
        }
    },
    {
        id: 'iphone5',
        name: 'iPhone 5',
        data: {
            price: 500,
            quantity: 30,
            discountInPercent: 5
        }
    },
    {
        id: 'iphone5s',
        name: 'iPhone 5s',
        data: {
            price: 600,
            quantity: 10,
            discountInPercent: 5
        }
    },
    {
        id: 'iphone6',
        name: 'iPhone 6',
        data: {
            price: 700,
            quantity: 14,
            discountInPercent: 5
        }
    },
    {
        id: 'iphone6plus',
        name: 'iPhone 6 Plus',
        data: {
            price: 800,
            quantity: 4,
            discountInPercent: 10
        }
    }
],
    clothes: [

        {
            name: 'Jeans',
            data: {
                price: 100,
                quantity: 34,
                discountInPercent: 15
            }
        },
        {
            name: 'Skirt',
            data: {
                price: 50,
                quantity: 34,
                discountInPercent: 5
            }
        },
        {
            name: 'T-Shot',
            data: {
                price: 60,
                quantity: 34,
                discountInPercent: 5
            }
        },
        {
            name: 'Gloves',
            data: {
                price: 70,
                quantity: 34,
                discountInPercent: 5
            }
        },
        {
            name: 'Hat',
            data: {
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

    getProduct: function (identifier) {
        var result;
        for (var prod in _store) {
            if (_store.hasOwnProperty(prod)) {
                _store[prod].every(function (item) {
                    if(item.id === identifier){
                        result = item;
                        return false;
                    }
                    return true;
                });
            }
        }
        return result;
    }
});