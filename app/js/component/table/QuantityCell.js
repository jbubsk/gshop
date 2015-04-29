var React = require('react'),
    BasketAction = require('../../actions/BasketActions'),
    BasketStore = require('../../stores/BasketStore'),
	QuantityCell;

QuantityCell = React.createClass({

    _onQuantityChange: function () {
        BasketAction.changeQuantity({
            category: this.props.category,
            identifier: this.props.id,
            quantity: React.findDOMNode(this.refs.quantity).value
        });
    },

    componentDidMount: function () {
        var basket = BasketStore.getBasketItem(this.props.id);
        React.findDOMNode(this.refs.quantity).value = basket ? basket.quantity : 0;
    },

	render: function(){
		return (
            <div className="quantity cell fr">
                <input
                    type="number"
                    min="0"
                    onChange={this._onQuantityChange}
                    ref="quantity"/>
            </div>
		)
	}
});

module.exports = QuantityCell;