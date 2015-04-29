var React = require('react'),
	TableHeader;
	
TableHeader = React.createClass({
	render: function(){
		return (
			<div className="row-header row-positioning">
                <div className="description cell fl">
                    Description
                </div>
                <div className="total cell fr">
                    Total
                </div>
                <div className="quantity cell fr">
                    Quantity
                </div>
                <div className="price cell fr">
                    Price
                </div>
                <div className="clear cell"></div>
            </div>
		)
	}
});

module.exports = TableHeader;