var React = require('react')
var ReactDOM = require('react-dom')

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});


ReactDOM.render(<ProductCategoryRow category='queso' />, document.body);
