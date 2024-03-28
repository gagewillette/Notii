import React from "react";
import "../../../styles/bodyhome.scss";
import { useNavigate } from "react-router-dom";
import { isValidUUID } from "../../../backend/utils";

export default function BodyHome() {
  const nav = useNavigate();

  const handleGetStartedClick = (e) => {
    //this will need to be changed in the future
    //when accounts and other shit are implemeneted kms

    nav("/signin")


  };

  return (
    <>
      <div className="body-home">
        <div className="body-home-splash-text">
          <div className="body-home-header">
            <h1>Effortless note taking</h1>
          </div>

          <div className="body-home-subheader">
            <h2>The leader in AI notetaking for students.</h2>
          </div>
        </div>

        <div className="body-home-splash-buttons">
          <div className="get-started-button">
            <button onClick={handleGetStartedClick} id="get_started">
              <p>Get Started</p>
            </button>
          </div>
          <div className="learn-more-button">
            <button id="learn_more">
              <p>Learn More →</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
