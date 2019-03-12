import React, { Component } from "react";
import CircleImage from "./CircleImage";

class Project extends Component {
  render() {
    return (
      <div
        className="project"
        style={{
          boxShadow: "0 0 3px 0px black",
          padding: "10px",
          marginBottom: "30px",
          width:"100%"
        }}
      >
        <div
          className="project-title"
          style={{ fontSize: "32px", marginBottom: "10px" }}
        >
          <span>{this.props.name?this.props.name:"Project Name"}</span>
        </div>
        <div className="project-body">
          <a href={this.props.link?this.props.link:"#"} target="blank">
            {this.props.image ? (
              <img
                src={this.props.image}
                style={{
                  width: "285px",
                  height: "160px",
                  borderBottom: this.props.border?"2px solid var(--color5)":"none",
                  borderTop: this.props.border?"2px solid var(--color5)":"none",
                  borderRadius: "10px"
                }}
              />
            ) : (
              null
            )}
          </a>
          <div className="project-description">
            {this.props.description.split("|").map(par => (
              <p>{par.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
