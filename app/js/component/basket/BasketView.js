var React = require('react'),
    BasketStore = require('../../stores/BasketStore'),
    BasketView;

BasketView = React.createClass({
    getInitialState: function () {
        return {
            showBasket: false
        }
    },

    render: function () {
        var basket = BasketStore.getBasket(),
            total = BasketStore.getTotal(),
            styles = {display: this.props.showBasket ? 'block' : 'none'},
            products = [],
            content = <div className="empty">Your basket is empty.</div>;

        for (var id in basket) {
            if (basket.hasOwnProperty(id)) {
                products.push(
                    <div className="basket-row" key={id}>
                        <div className="basket-title fl">
                            <span>{basket[id].name}</span>
                        </div>
                        <div className="basket-quantity fl">
                            <span>{'(' + basket[id].quantity + ')'}</span>
                        </div>
                        <div className="basket-total-row fr">
                            <span>{'$ ' + basket[id].total}</span>
                        </div>
                        <div className="clear"></div>
                    </div>
                );
            }
        }
        if (total) {
            content =
                <div>
                    <hr/>
                    <div id="basket-list">
                        {products.map(function (item) {
                            return item;
                        })}
                    </div>
                    <div className="basket-total">
                        <h1>{'$ ' + total}</h1>
                    </div>
                </div>
        }

        return (
            <div id="basket-view" style={styles}>
                <div id="basket-content">
                {content}
                </div>
                <div className="close">
                    <span onClick={this.props.onClose}>Close</span>
                </div>
            </div>
        )
    }
});

module.exports = BasketView;