import React, { Component } from "react";

import LeftNav from "@comps/LeftNav";

export default class Home extends Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <LeftNav history={this.props.history} />
      </div>
    );
  }
}
