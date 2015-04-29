var ajax = require('../common/ajax');

var data = {
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

function getClothesById(id) {
    var product = null;
    data.clothes.every(function (item) {
        if (item.id === id) {
            product = item.data;
            return false;
        }
        return true;
    });
    return product;
}

function getPhoneById(id) {
    var product = null;
    data.phones.every(function (item) {
        if (item.id === id) {
            product = item.data;
            return false;
        }
        return true;
    });
    return product;
}

function getClothes(callback) {

    /*    ajax.send({
     success: function (data) {
     callback(null, data);
     },
     error: function (error) {
     callback(error, null);
     }
     });*/
    callback(null, data.clothes);
}

function getPhones(callback) {

    /*    ajax.send({
     success: function (data) {
     callback(null, data);
     },
     error: function (error) {
     callback(error, null);
     }
     });*/
    callback(null, data.phones);
}

module.exports = {
    getPhones: getPhones,
    getClothes: getClothes,
    getClothesById: getClothesById,
    getPhoneById: getPhoneById
};