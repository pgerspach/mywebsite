import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import HeaderNavMobile from "../components/HeaderNavMobile";

class FutureProjects extends Component {
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
          <HeaderNav selected={"Future Projects"} />
        ) : (
          <HeaderNavMobile selected={"Future Projects"} />
        )}
        <section className={`page future-projects-page flex-row`}>
          <div className="flex-column page-main">
            <PageTitle pageName="Future Projects" />
          </div>
        </section>
      </div>
    );
  }
}
export default FutureProjects;
