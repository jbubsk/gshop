var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Redirect = Route.Redirect,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    PageContent = require('./PageContent'),
    PageHeader = require('./header/PageHeader'),
    Products = require('./Products'),
    ProductTable = require('./table/ProductTable'),
    ProductPreview = require('./ProductPreview'),
    RouteNotFound = require('./RouteNotFound'),
    routers,
    App;

App = React.createClass({
    render: function () {
        return (
            <div>
                <PageHeader/>
                <PageContent/>
            </div>
        )
    }
});

routes = (
    <Route path="products" handler={App}>
        <Route name="category" path=":name" handler={Products}>
            <Route name="product" path=":identifier" handler={ProductPreview}/>
        </Route>
        <DefaultRoute handler={Products}/>
        <NotFoundRoute handler={RouteNotFound}/>
    </Route>
);

module.exports = {
    run: function () {
        Router.run(routes, function (Handler) {
         React.render(<Handler/>, document.body)
         });

        /* Route for html5 */
        /*Router.run(routes, Router.HistoryLocation, function (Handler) {
         React.render(<Handler/>, document.body);
         });*/
    }
};