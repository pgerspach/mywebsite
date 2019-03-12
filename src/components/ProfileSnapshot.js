import React, { Component } from "react";
import CircleImage from "./CircleImage";

class ProfileSnapshot extends Component {
  state = {
    page: "Home",
    Home: "This background image was taken at Roy's Peak in Wanaka, New Zealand. Don't let the filter fool you, it was actually quite bright that day.",
    History:
      "Thanks for taking an interest in where I've been! I'm proud of my past and believe every experience of mine has only made me a stronger person and better coder",
    Skillset: "I'm learning new tech every day, so this page should be updated pretty often! My favorites that I've learned thus far are Express.js, MySQL/Sequelize, and React (which powers this site!)",
    Interests:"Couldn't help myself including this page. Having a personal website, I believe it's important to allow visitors to get a full picture of me, which includes my hobbies.",
    Projects:"I hope to have to update this page constantly, because it means I'm completing projects and starting a bunch of new ones!",
    "Edu And Exp":"Go Irish!",
    "Future Projects":"Really hope to see these moved into the Projects page soon!"};
  componentDidMount() {
    this.setState({ page: this.props.selected });
  }
  render() {
    console.log(this.state.selected);
    return (
      <div
        style={this.props.style}
        className={`profile-snapshot flex-column ${this.props.profileDisplay}`}
      >
        <CircleImage
          imageId="headshot"
          imageSource="./images/me.jpg"
          size="90px"
          circle={true}
        />
        <p>
          {this.state[this.props.selected]
            ? this.state[this.props.selected]
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex commodi nulla voluptatum numquam eaque nam, rem repellat nemo libero nihil inventore assumenda tempora eius vitae ratione excepturi molestias ipsum?"}
        </p>
      </div>
    );
  }
}
export default ProfileSnapshot;
