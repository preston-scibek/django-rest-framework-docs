var React = require('react');

var JSONpp = require('../utils/jsonpp');

var Response = React.createClass({

  getInitialState: function () {
    return {
      payload: this.props.payload,
    };
  },


  render: function () {

    var requestJSON = JSONpp.prettyPrint(this.state.payload);
    return (
      <div>
        <h3>Request</h3>

        <pre><code dangerouslySetInnerHTML={{__html: responseJSON}}></code></pre>

      </div>
    );
  }
});

module.exports = Response;
