var $ = require('jquery'),
    loaderActions = {
    toggle: function () {

    }
};
var ajax = {

    send: function (params) {
        var _loaderState ='';

        loaderActions.toggle(_loaderState);
        $.ajax({
            url: params.url,
            method: params.method,
            data: params.data,
            success: function (data) {
                if (params.success) {
                    params.success(data);
                }
                loaderActions.toggle(!_loaderState);
            },
            error: function (error) {
                console.error("Response text: " + error.responseText + "Status: " + error.status + "\nStatus text: " + error.statusText);
                if (params.error) {
                    params.error(error);
                }
                loaderActions.toggle(!_loaderState);
            }
        });
    }
};

module.exports = ajax;