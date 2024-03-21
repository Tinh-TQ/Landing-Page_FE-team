import React, { Component } from "react";
import "../../styles/style.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import '../../styles/style.css';

type State = {};
type Props = {
  text?: string;
};

export default class SmallBtn extends Component<Props, State> {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#6D1600",
          position: "relative",
          margin: "0 auto",
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        className="btn-small"
      >
        <span
          style={{
            backgroundColor: "#fff",
            width: "2px",
            height: "16px",
            position: "absolute",
            top: "25%",
            left: "50%",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#fff",
            width: "2px",
            height: "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%) rotate(90deg)' 
          }}
        ></span>
      </div>
    );
  }
}

// { disable ? `disable ${className}` : className} onClick={(e) => onClick(e)}
