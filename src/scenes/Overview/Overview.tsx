import * as React from "react";
import { connect } from 'react-redux';

class Overview extends React.Component {

  render() {
    return (
      <h2>Overview</h2>
    );
  }

}

export default connect()(Overview);