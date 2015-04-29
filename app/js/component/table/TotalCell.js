var React = require('react'),
    BasketStore = require('../../stores/BasketStore'),
    TotalCell;

TotalCell = React.createClass({
    getInitialState: function () {
        var basketItem = BasketStore.getBasketItem(this.props.id);
        return {
            total: basketItem ? basketItem.total : 0
        }
    },

    componentDidMount: function () {
        BasketStore.addChangeListener(this.updateTotal);
    },

    componentWillUnmount: function () {
        BasketStore.removeChangeListener(this.updateTotal);
    },

    updateTotal: function () {
        this.setState({
            total: BasketStore.getTotalForProduct(this.props.id)
        });
    },

    render: function () {
        return (
            <div className="total cell fr">
                <span>{this.state.total > 0 ? '$ ' + this.state.total : ''}</span>
            </div>
        )
    }
});

module.exports = TotalCell;