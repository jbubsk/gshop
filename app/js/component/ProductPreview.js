var React = require('react'),
    Navigation = require('react-router').Navigation,
    ProductService = require('../services/ProductService'),
    AppConst = require('../common/AppConst'),
    ProductPreview;

ProductPreview = React.createClass({
    mixins: [Navigation],

    render: function () {
        var identifier = this.context.router.getCurrentParams().identifier,
            category = this.context.router.getCurrentParams().name,
            product;

        if (category === 'phones') {
            product = ProductService.getPhoneById(identifier);
        } else if (category === 'clothes') {
            product = ProductService.getClothesById(identifier);
        }

        return (
            <div className="preview">
                <div className="picture fl">
                    <img src={AppConst.images[identifier]}/>
                </div>
                <div className="title fl">
                    {product.name}
                </div>
                <div className="clear"></div>
                <div className="details">
                    <div>Year: 2009</div>
                    <div>Producer: Some Co</div>
                </div>
            </div>
        )
    }
});

module.exports = ProductPreview;