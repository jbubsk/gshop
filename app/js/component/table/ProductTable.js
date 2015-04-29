var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation,
    RouteHandler = Router.RouteHandler,
    ShopStore = require('../../stores/ShopStore'),
    BasketStore = require('../../stores/BasketStore'),
    Table = require('./Table'),
    TableHeader = require('./TableHeader'),
    TotlaRow = require('./TotalRow'),
    PostsList;

PostsList = React.createClass({
    mixins: [Navigation],

    getInitialState: function () {
        return {
            products: []
        }
    },

    componentDidMount: function () {
        this.updateState();
    },

    updateState: function () {
        var category = this.context.router.getCurrentParams().name;

        function update(err, data) {
            if (err) console.log(err);
            this.setState({products: data});
        }

        if (category === 'phones') {
            ShopStore.getPhones(update.bind(this));
        } else if (category === 'clothes') {
            ShopStore.getClothes(update.bind(this));
        }
    },

    componentWillReceiveProps: function () {
        this.updateState();
    },

    render: function () {
        var table = '',
            category = this.context.router.getCurrentParams().name,
            content = <div></div>;

        if (this.state.products) {
            table =
                <div>
                    <TableHeader/>
                    <Table
                        category={this.context.router.getCurrentParams().name}
                        products={this.state.products}/>
                </div>
        }
        if (category) {
            content =
                <div>
                    <div className="table-wrapper">
                    {table}
                    </div>
                </div>
        }
        return (
            content
        )
    }
});

module.exports = PostsList;