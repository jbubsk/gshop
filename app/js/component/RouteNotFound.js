var React = require('react'),
    RouteNotFound;

RouteNotFound = React.createClass({
	render: function(){
		return (
			<div>Route not found!</div>
		)
	}
});

module.exports = RouteNotFound;