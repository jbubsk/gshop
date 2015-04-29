var React = require('react'),
    BasketHeader = require('../basket/BasketHeader'),
    HeaderTile = require('./HeaderTitle'),
    PageHeader;

PageHeader = React.createClass({
    render: function () {
        return (
            <div>
                <div id="header">
                    <div className="header-content">
                        <HeaderTile/>
                        <BasketHeader/>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = PageHeader;