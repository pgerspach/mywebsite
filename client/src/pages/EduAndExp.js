import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import IconRow from "../components/IconRow";
import Project from "../components/Project";
import HeaderNavMobile from "../components/HeaderNavMobile";

class EduAndExp extends Component {
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
    const education = [
      {
        name: "University of Notre Dame",
        image:"./images/ndlogo.png"
      },
      {
        name: "Columbia University Engineering Coding Boot Camp",
        image:"./images/columbia.png"
      }
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Edu And Exp"} />
        ) : (
          <HeaderNavMobile selected={"Edu And Exp"} />
        )}
        <section className={`page interests-page flex-row`}>
          <div className="flex-column page-main">
            <PageTitle pageName="Education And Experience" />
            <div>
              <p>
                This section is intended to be very similar to what you can find
                on my resume. I list my academic background, as well as my past
                job experiences with brief descriptions. When coupled with the
                content found in the skills section, it should form a more
                complete picture of my professionally diverse past. I have been
                on a journey to discover what I am passionate about, and this
                journey has brought me to the doorstep of the tech industry.
              </p>
            </div>
            {education.map(education => (
              <Project image={education.image?education.image:null}description={""} name={education.name} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
export default EduAndExp;
