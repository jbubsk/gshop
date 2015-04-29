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
                    <div id="page-content">
                        <div className="fl">
                            <MenuNavig/>
                        </div>
                        <div className="fl">
                            <RouteHandler/>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = PageContent;