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
          <div className="pricing-div">
            <h2>Free</h2>
            <h3>For the casual note-taker</h3>
            <h5>$0/month</h5>
            <h4>✗ Unlimited notes</h4>
            <h4>✗ Unlmited storage</h4>
            <h4>✔ Basic features</h4>
            <h4>✔ Ads</h4>
            <h4>✔ Community support</h4>
          </div>
          <div className="pricing-div">
            <h2>Pro</h2>
            <h3>For the professional note-taker</h3>
            <h5>$10/month</h5>
            <h4>✔ Unlimited notes</h4>
            <h4>✔ Unlimited storage</h4>
            <h4>✔ Advanced features</h4>
            <h4>✔ No ads</h4>
            <h4>✔ Priority support</h4>
          </div>
          <div className="pricing-div">
            <h2>Enterprise</h2>
            <h3>For your whole business</h3>

            <h5>$20/month</h5>
            <h4>✔ Unlimited notes</h4>
            <h4>✔ Unlimited storage</h4>
            <h4>✔ Advanced features</h4>
            <h4>✔ No ads</h4>
            <h4>✔ 24/7 support</h4>

          </div>
        </div>
      </div>
    </>
  );
}
