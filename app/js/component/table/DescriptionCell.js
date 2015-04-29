var React = require('react'),
    DescriptionCell;

DescriptionCell = React.createClass({
    render: function () {
        var text = 'unavailable',
            className = 'availability';

        if (this.props.data.quantity > 0) {
            className += ' green';
            text = 'available ' + this.props.data.quantity;
        } else {
            className += ' red';
        }

        return (
            <div className="description cell fl">
                <div>{this.props.data.name}</div>
                <div className={className}>
                {text}
                </div>
            </div>
        )
    }
});

module.exports = DescriptionCell;