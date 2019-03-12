import React, { Component } from "react";
import HeaderNav from "../components/HeaderNav";
import PageTitle from "../components/PageTitle";
import Project from "../components/Project";
import HeaderNavMobile from "../components/HeaderNavMobile";

class Projects extends Component {
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
    const projects = [
      {
        name: "Quote",
        description:
          "Quote is a full stack project I've been working on and off for a few months or so. The idea is to be a dedicated and intimate platform for sharing moments through quotes. Friends can post things said by their friends either publicly or in groups, and have them approved or denied. Approved quotes land on the speaker's own quote page. | Node.js and Express.js are used to set up the server and routing, while Sequelize.js is used with MySQL to store user information. User authentication is done through Google Firebase, which also provides the uuid for accessing database information. Finally, Handlebars is used to render the HTML. | This project is a work in progress and changes every day. I will attempt to keep this page as updated as I can and will post the link when I first push it to heroku!",
        image: "./images/quote.png",
        link:"https://github.com/pgerspach/Quote"
      },
      {
        name: "College Football Recruiting",
        description:
          "The first order of business for this project was gathering the data. I decided to scrape rivals.com for the recruiting data, and teamrankings.com for the win/loss records data.| I wanted to test my regular expression skills on this project, and so I scraped all the data with vanilla regex. This proved challenging, but incredibly rewarding when everything worked. For loading the html, I used npm's 'request' module for teamrankings.com, while I was forced to use phantom.js for rivals.com as their content populates after the page loads.| Once I gather the data, I write it all into a JSON file which is read by my server. The server sets up the routes, and provides all of the team names to the front end to create the dropdown menu. The front end then posts for which team it wants data, and the back end responds with all the data which is graphed using plotly.js.",
        image: "./images/recruit.png",
        link:"https://github.com/pgerspach/Recruit"

      }
    ];
    return (
      <div>
        {!this.state.mobile ? (
          <HeaderNav selected={"Projects"} />
        ) : (
          <HeaderNavMobile selected={"Projects"} />
        )}
        <section className={`page projects-page flex-row`}>
          <div className="flex-column page-main">
            <PageTitle pageName="Projects" />
            <div>
              <p style={{ fontSize: "20px" }}>
                Over the past six months, I have worked tirelessly to not only
                learn, but to also create. I have put a great deal of effort
                into homework assignments, group projects, and, more recently,
                personal projects. This will be a relatively in-depth look at
                some of my favorite creations.
              </p>
            </div>
            {projects.map(project => (
              <Project
                description={project.description}
                name={project.name}
                image={project.image}
                link={project.link}
                border={true}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
export default Projects;
