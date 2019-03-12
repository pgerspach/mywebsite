import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import HeaderNavMobile from "../components/HeaderNavMobile";

class History extends Component {
  state = {
    profileDisplay: false,
    mobile: false
  };
  componentWillMount() {
    this.setState({
      mobile: !(window.innerWidth >400)
    });
  }
  render() {
    return (
      <div>
        {!this.state.mobile  ? (
          <HeaderNav selected={"History"} />
        ) : (
          <HeaderNavMobile selected={"History"} />
        )}
        <section className={`page history-page flex-column`}>
          <PageTitle pageName="History" />
        </section>
      </div>
    );
  }
}
export default History;
