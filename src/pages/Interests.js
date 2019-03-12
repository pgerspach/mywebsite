import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import IconRow from "../components/IconRow";
import Project from "../components/Project";
import HeaderNavMobile from "../components/HeaderNavMobile";

class Interests extends Component {
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
    const interests = [
      {
        icon: "crossword",
        description: "I love NYT crosswords!",
        name: "Crosswords"
      },
      { icon: "notredame", description: "I love ND!", name: "Fighting Irish" },
      { icon: "guitar", description: "I love guitar!", name: "Guitar" },
      {
        icon: "songwriting",
        description: "I love songwriting!",
        name: "Songwriting"
      },
      {
        icon: "basketball",
        description: "I love basketball!",
        name: "Pick-up games"
      }
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Interests"} />
        ) : (
          <HeaderNavMobile selected={"Interests"} />
        )}
        <section className={`page interests-page flex-row`}>
          <div className="flex-column page-main">
            <PageTitle pageName="Interests" />
            <IconRow
              numRows={1}
              size={"70"}
              icons={interests.map(interest => interest.icon)}
              circle={true}
            />
            {interests.map(interest => (
            <Project description={interest.description} name={interest.name} />
          ))}
          </div>
        </section>
      </div>
    );
  }
}
export default Interests;
