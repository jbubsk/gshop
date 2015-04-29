var React = require('react'),
    Router = require('react-router'),
    ProductTable = require('./table/ProductTable'),
    RouteHandler = Router.RouteHandler,
    Products;

Products = React.createClass({
    render: function () {
        return (
            <div>
                <div className="fl">
                    <ProductTable/>
                </div>
                <div className="fl">
                    <RouteHandler/>
                </div>
                <div className="clear"></div>
            </div>

        )
    }
});

module.exports = Products;