import React, { Component } from "react";
import CircleImage from "./CircleImage";

class IconRow extends Component {
  render() {
    const icons = [];
    let i = 0;
    while (i < this.props.numRows) {
      icons.push(
        this.props.icons.slice(
          (this.props.icons.length / this.props.numRows) * i,
          (this.props.icons.length / this.props.numRows) * (i + 1)
        )
      );
      i++;
    }
    console.log(icons);
    return (
      <div className = "icons-row-wrapper flex-column">
        {icons.map(iconset => (
          <div className="icons-row flex-row">
            {iconset.map(icon => (
              <CircleImage
                imageId={icon}
                imageSource={`./images/${icon}.${this.props.jpg?"jpg":"png"}`}
                size={`${this.props.size}px`}
                circle={this.props.circle}
                radius={this.props.radius}
                shadow={this.props.shadow}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
export default IconRow;
