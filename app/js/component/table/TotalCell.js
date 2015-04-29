var React = require('react'),
    BasketStore = require('../../stores/BasketStore'),
	TotalCell;

TotalCell = React.createClass({
    getInitialState: function () {
        return {
            total: 0
        }
    },

    componentDidMount: function () {
        var basketItem = BasketStore.getBasketItem(this.props.id);

        BasketStore.addChangeListener(this.updateTotal);
        this.setState({
                total: basketItem ? basketItem.total : 0
            }
        )
    },
    componentWillUnmount: function () {
        BasketStore.removeChangeListener(this.updateTotal);
    },

    updateTotal: function () {
        this.setState({
            total: BasketStore.getTotalForProduct(this.props.id)
        });
    },

	render: function(){
		return (
            <div className="total cell fr">
                <span>{this.state.total > 0 ? '$ ' + this.state.total : ''}</span>
            </div>
		)
	}
});

module.exports = TotalCell;