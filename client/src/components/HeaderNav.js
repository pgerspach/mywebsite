import React, { Component } from "react";
import ProfileSnapshot from "./ProfileSnapshot";

class HeaderNav extends Component {
  state = {
    links: ["Skillset", "Edu And Exp", "Projects", "Future Projects"],
    linksLeft: ["Skillset", "Edu And Exp"],
    linksRight: ["Projects", "Future Projects"],
    profileDisplay: false
  };
  handleOnProfileSelect = event => {
    this.setState({
      profileDisplay: !this.state.profileDisplay
    });
  };
  render() {
    const aStyle = {
      width: `calc((100vw - 240px) / ${this.state.links.length})`
    };
    return (
      <div className="flex-column">
        <div className="flex-row header-nav">
          {this.state.linksLeft.map(linkName => (
            <a
              style={
                this.props.selected === linkName
                  ? {
                      width: `calc(100vw / ${this.state.links.length + 1})`,
                      color: "var(--color4)"
                    }
                  : {
                      width: `calc(100vw / ${this.state.links.length + 1})`
                    }
              }
              className={`nav-link ${linkName
                .toLowerCase()
                .replace(/\s/, "-")}`}
              href={linkName
                .split(" ")
                .map(name => {
                  return name.charAt(0).toUpperCase() + name.slice(1);
                })
                .join("")}
            >
              <span>{linkName}</span>
            </a>
          ))}
          <div
            style={{ height: "100%", position: "relative" }}
            onMouseEnter={this.handleOnProfileSelect}
            onMouseLeave={this.handleOnProfileSelect}
          >
            <a className="pgerspach nav-link" href="Home">
              <span>P. Gerspach</span>
            </a>
            <ProfileSnapshot
              selected={this.props.selected}
              profileDisplay={this.state.profileDisplay}
            />
          </div>

          {this.state.linksRight.map(linkName => (
            <a
              style={
                this.props.selected === linkName
                  ? {
                      width: `calc(100vw / ${this.state.links.length + 1})`,
                      color: "var(--color4)"
                    }
                  : {
                      width: `calc(100vw / ${this.state.links.length + 1})`
                    }
              }
              className={`nav-link ${linkName
                .toLowerCase()
                .replace(/\s/, "-")}`}
              href={linkName
                .split(" ")
                .map(name => {
                  return name.charAt(0).toUpperCase() + name.slice(1);
                })
                .join("")}
            >
              <span>{linkName}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default HeaderNav;
