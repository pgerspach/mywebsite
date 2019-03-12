import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import IconRow from "../components/IconRow";
import HeaderNavMobile from "../components/HeaderNavMobile";

class Skillset extends Component {
  state = {
    profileDisplay: false,
    mobile: false
  };
  componentWillMount() {
    this.setState({
      mobile: !(window.innerWidth > 400)
    });
  }
  render() {
    const skills = [
      "html",
      "css",
      "js",
      "nodejs",
      "mongo",
      "server",
      "sql",
      "python",
      "api",
      "react"
    ];
    const skillDescriptions = [""];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Skillset"} />
        ) : (
          <HeaderNavMobile selected={"Skillset"} />
        )}
        <section className={`page skillset-page flex-row`}>
          <div className="flex-column page-main">
            <PageTitle pageName="Skillset" />
            <div style={{width:"100%", height:`${this.state.mobile?3*70+40:2*70+40}px`}}>
            <IconRow numRows={this.state.mobile?3:2} size={"70"} icons={skills} circle={true} />

            </div>
            <div>
              <p>
                The past five years have been a beautiful mess when it comes to
                learning. I attended the University of Notre Dame, where I
                studied mechanical engineering. Outside the standard mechanical
                engineering curriculum, which is itself a hodge-podge of various
                challenging courses, I took electives in a multitude of areas
                including Systems Programming, which was my first deep dive into
                a programming language with C. In addition to my schooling, I
                held four internships across a broad spectrum of fields which
                taught me a variety of skills. In the past year and since the
                beginning of my boot camp, my learning has been strictly focused
                on aquiring new tech skills. This has been the most enjoyable
                time in my life, as my passion is driving me effortlessly toward
                a total devotion to learning. However, I cannot forget the
                invaluable teachings of my experiences, as they no doubt
                contributed to my some of my proudest strengths. The icons below
                display an array of technologies which I have had the pleasure
                of learning within the past year. However, I would rather allow
                my github and projects demostrate my capabilities. In this
                section, I will go over some of the other skills I have learned
                throughout my schooling and my young career.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Skillset;
