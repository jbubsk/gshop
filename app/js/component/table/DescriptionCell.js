var React = require('react'),
    ShopStore = require('../../stores/ShopStore'),
    DescriptionCell;

DescriptionCell = React.createClass({
    getInitialState: function () {
        return {
            storeProduct: this.getProduct()
        }
    },
    getProduct: function () {
        return ShopStore.getProduct({
            category: this.props.category,
            id: this.props.id
        })
    },
    componentDidMount: function () {
        ShopStore.addChangeListener(this.updateState)
    },

    componentWillUnmount: function () {
        ShopStore.removeChangeListener(this.updateState)
    },

    updateState: function () {
        this.setState({
            storeProduct: this.getProduct()
        });
    },

    render: function () {
        var text = 'unavailable',
            className = 'availability';

        if (this.state.storeProduct.quantity > 0) {
            className += ' green';
            text = 'available ' + this.state.storeProduct.quantity;
        } else {
            className += ' red';
        }

        return (
            <div className="description cell fl">
                <div>{this.state.storeProduct.name}</div>
                <div className={className}>
                {text}
                </div>
            </div>
        )
    }
});

module.exports = DescriptionCell;