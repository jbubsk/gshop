var React = require('react'),
    AppConst = require('../../common/AppConst'),
    BasketStore = require('../../stores/BasketStore'),
    BasketView = require('./BasketView'),
    BasketHeader;

BasketHeader = React.createClass({
    getInitialState: function () {
        return {
            total: BasketStore.getTotal(),
            showBasket: false
        }
    },

    componentDidMount: function () {
        BasketStore.addChangeListener(this.updateTotal);
        document.addEventListener('click', function () {

        })
    },

    componentWillUnmount: function () {
        BasketStore.removeChangeListener(this.updateTotal);
    },

    updateTotal: function () {
        this.setState({
            total: BasketStore.getTotal()
        });
    },

    _onBasketClick: function () {
        this.setState({
            showBasket: true
        });
    },

    _onBasketClose: function () {
        this.setState({
            showBasket: false
        });
    },

    render: function () {
        return (
            <div className="fr">
                <div id="basket-widget" onClick={this._onBasketClick}>
                    <div className="total fr">{'$ ' + this.state.total}</div>
                    <div
                        id="basket-header"
                        className="fl">
                        <img src={AppConst.images.basket}/>
                    </div>
                </div>
                <BasketView
                    onClose={this._onBasketClose}
                    showBasket={this.state.showBasket}/>
            </div>
        )
    }
});

module.exports = BasketHeader;