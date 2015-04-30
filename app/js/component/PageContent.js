var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler,
    MenuNavig = require('./MenuNavig'),
    PageContent;

PageContent = React.createClass({
    render: function () {
        return (
            <div>
                <div id="content">
                    <MenuNavig/>
                    <div id="page-content" className="fl">
                        <RouteHandler/>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

module.exports = PageContent;