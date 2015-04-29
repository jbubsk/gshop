var React = require('react'),
    BasketStore = require('../../stores/BasketStore'),
    TotalRow;

TotalRow = React.createClass({
    getInitialState: function () {
        return {
            total: 0
        }
    },

    componentDidMount: function () {
        BasketStore.addChangeListener(this.updateTotal);
    },

    componentWillUnmount: function () {
        BasketStore.removeChangeListener(this.updateTotal);
    },
    updateTotal: function () {
        this.setState({total: BasketStore.getTotal()});
    },
    render: function () {
        var total = '';
        if (this.state.total > 0) {
            total = '$ ' + this.state.total;
        }
        return (
            <div className="row-positioning row-total">
                <div className="description cell fl">Total</div>
                <div className="total cell fr">{total}</div>
                <div className="clear"></div>
            </div>
        )
    }
});

module.exports = TotalRow;