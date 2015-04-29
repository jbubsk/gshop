var React = require('react'),
    TableRow = require('./TableRow'),
    TotalRow = require('./TotalRow'),
    BasketStore = require('../../stores/BasketStore'),
    Table;

Table = React.createClass({
    render: function () {
        var category = this.props.category;

        return (
            <div className="table">
                {this.props.products.map(function (product, index, array) {
                    var className = index + 1 === array.length ? 'last' : '';
                    return <TableRow
                        className={className}
                        product={product}
                        category={category}
                        key={product.id}/>
                })}
                <TotalRow/>
            </div>
        )
    }
});

module.exports = Table;