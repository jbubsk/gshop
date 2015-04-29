var React = require('react'),
    Navigation = require('react-router').Navigation,
    HeaderTitle;

HeaderTitle = React.createClass({
    mixins: [Navigation],

    _onTitleClick: function () {
        this.context.router.transitionTo('/products');
    },

    render: function () {
        return (
            <div
                className="title fl"
                onClick={this._onTitleClick}>G-Shop</div>
        )
    }
});

module.exports = HeaderTitle;