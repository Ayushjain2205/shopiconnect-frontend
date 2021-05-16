import React, { Component } from "react";
import Shoptile from "./Shoptile";

export class Shops extends Component {
  render() {
    return (
      <div style={shopStyle}>
        {this.props.shops.map((shop) => (
          <Shoptile key={shop.id} shop={shop} />
        ))}
      </div>
    );
  }
}

const shopStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
  marginBottom : '1.2rem'
};

export default Shops;
