import React from "react";
import "../../styles/pricing.scss";

export default function Pricing() {
  return (
    <>
      <div className="pricing-wrapper">

        <div className="pricing-text">

            <h2>Pricing</h2>
            <h3>Choose the perfect plan for you</h3>
            <h4>Upgrade your note-taking with our flexible plan options</h4>
        </div>

        <div className="pricing-container">
          <div className="pricing-div">Div 1</div>
          <div className="pricing-div">Div 2</div>
          <div className="pricing-div">Div 3</div>
        </div>
      </div>
    </>
  );
}
