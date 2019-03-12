import React, { Component } from "react";

class CircleImage extends Component {
  render() {
    return (
      <div
        className="circle-image"
        style={{ width: this.props.size, height: this.props.size }}
      >
        <img
          style={
            this.props.circle
              ? {
                  border: "0px solid black",
                  borderRadius: "100%",
                  boxShadow: `${this.props.shadow?1:0}px ${this.props.shadow?1:0}px ${
                    this.props.shadow ? this.props.shadow : 0
                  }px 0px black`
                }
              : this.props.radius
              ? {
                  border: " 0px solid black",
                  borderRadius: `${this.props.radius}%`,
                  boxShadow: `${this.props.shadow?1:0}px ${this.props.shadow?1:0}px ${
                    this.props.shadow ? this.props.shadow : 0
                  }px 0px black`
                }
              : {}
          }
          className={`${this.props.imageId}`}
          src={this.props.imageSource}
          alt="Me"
        />
      </div>
    );
  }
}
export default CircleImage;
