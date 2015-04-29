var React = require('react'),
    ShopAction = require('../../actions/ShopActions'),
    BasketStore = require('../../stores/BasketStore'),
    ShopStore = require('../../stores/ShopStore'),
    AppConst = require('../../common/AppConst'),
    QuantityCell;

QuantityCell = React.createClass({
    getInitialState: function () {
        var basketProduct = BasketStore.getBasketItem(this.props.id);

        return {
            basketProduct: basketProduct,
            plusActive: ShopStore.canBeQuantityIncreased(this.props.id),
            minusActive: basketProduct ? basketProduct.quantity > 0 : false
        }
    },

    _onClick: function (action) {
        if ((action === 'plus' && this.state.plusActive) ||
            (action === 'minus' && this.state.minusActive)) {

            ShopAction.changeQuantity({
                category: this.props.category,
                action: action,
                id: this.props.id
            });
        }
    },

    componentDidMount: function () {
        ShopStore.addChangeListener(this.updateState)
    },

    componentWillUnmount: function () {
        ShopStore.removeChangeListener(this.updateState)
    },

    updateState: function () {
        var basketProduct = BasketStore.getBasketItem(this.props.id);

        this.setState({
            basketProduct: basketProduct,
            plusActive: ShopStore.canBeQuantityIncreased(this.props.id),
            minusActive: basketProduct ? basketProduct.quantity > 0 : false
        });
    },

    getQuantity: function () {
        return this.state.basketProduct ? this.state.basketProduct.quantity : 0;
    },

    render: function () {
        var plusStyle = {opacity: this.state.plusActive ? 1 : 0.1};
        var minusStyle = {opacity: this.state.minusActive ? 1 : 0.1};

        return (
            <div className="quantity cell fr">
                <div className="q-value fl">{this.getQuantity()}</div>
                <div className="q-actions fl">
                    <div className="action plus"
                        style={plusStyle}
                        onClick={this._onClick.bind(this, 'plus')}>
                        <img src={AppConst.images.plus}/>
                    </div>
                    <div className="action minus"
                        style={minusStyle}
                        onClick={this._onClick.bind(this, 'minus')}>
                        <img src={AppConst.images.minus}/>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});

module.exports = QuantityCell;