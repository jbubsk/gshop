var React = require('react'),
    Navigation = require('react-router').Navigation,
    DescriptionCell = require('./DescriptionCell'),
    QuantityCell = require('./QuantityCell'),
    TotalCell = require('./TotalCell'),
    TableRow;

TableRow = React.createClass({
    getInitialState: function () {
        return {
            storeProduct: {}
        }
    },

    mixins: [Navigation],

    _onRowClick: function () {
        var params = this.context.router.getCurrentParams();

        params.identifier = this.props.product.id;
        this.context.router.transitionTo('product', params);
    },

    componentDidMount: function () {

    },
    render: function () {
        var className = 'row row-positioning ' + this.props.className;

        if (this.context.router.getCurrentParams().identifier === this.props.product.id) {
            className += ' selected';
        }

        return (
            <div
                className={className}
                onClick={this._onRowClick}>

                <DescriptionCell
                    category={this.props.category}
                    id={this.props.product.id}/>

                <TotalCell id={this.props.product.id}/>

                <QuantityCell
                    category={this.props.category}
                    id={this.props.product.id}/>

                <div className="price cell fr">
                    <div>$ {this.props.product.data.price}</div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});

module.exports = TableRow;