import React, { Component } from "react";

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title" style={{marginBottom:"20px"}}>
        <span>{this.props.pageName}</span>
      </div>
    );
  }
}
export default PageTitle;
