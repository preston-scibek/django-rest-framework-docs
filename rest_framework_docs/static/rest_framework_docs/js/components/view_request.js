var React = require('react');

var JSONpp = require('../utils/jsonpp');

var ViewRequest = React.createClass({

  getInitialState: function () {
    return {
      payload: this.props.payload,
    };
  },
    
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      payload: nextProps.payload
    });
  },


  render: function () {
    if (!this.state.payload) {
      return (
        <div>
          <h3>Response</h3>
          <p className='lead text-center'>Awaiting request...</p>
        </div>
      );
    }


    var requestJSON = JSONpp.prettyPrint(this.state.payload);
    return (
      <div>
        <h3>Request</h3>

        <pre><code dangerouslySetInnerHTML={{__html: requestJSON}}></code></pre>

      </div>
    );
  }
});

module.exports = ViewRequest;
