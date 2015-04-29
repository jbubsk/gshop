var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    MenuNavig;
	
MenuNavig = React.createClass({
	render: function(){
		return (
            <div className="menu-navig">
                <Link to="category" params={{name: 'phones'}}>Phones</Link>
                <Link to="category" params={{name: 'clothes'}}>Clothes</Link>
            </div>
		)
	}
});

module.exports = MenuNavig;