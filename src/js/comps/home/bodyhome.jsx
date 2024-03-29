import React from "react";
import "../../../styles/bodyhome.scss";
import { useNavigate } from "react-router-dom";
import { isValidUUID } from "../../../backend/utils";

export default function BodyHome() {
  const nav = useNavigate();

  const handleGetStartedClick = () => {
    //this will need to be changed in the future
    //when accounts and other shit are implemeneted kms
    const cookie = document.cookie;
    const uuid = cookie.split("=")[1];
    const isValid = isValidUUID(uuid);

    console.log(isValid);

    isValid.then((value) => {
      if (value) {
        nav("/notes");
      } else {
        nav("/signin");
      }
    });
  };

  return (
    <>
      <div className="body-home">
        <div className="body-home-splash-text">
          <div className="body-home-header">
            <h1>Effortless note taking</h1>
          </div>

          <div className="body-home-subheader">
            <h2>The leader in AI notetaking for</h2>
            <div className="rotating-text-nouns-wrapper">
              <span className="rotatingText-noun">students.</span>
              <span className="rotatingText-noun">teachers.</span>
              <span className="rotatingText-noun">professionals.</span>
            </div>
          </div>
        </div>

        <div className="body-home-splash-buttons">
          <div className="get-started-button">
            <button onClick={handleGetStartedClick} id="get_started">
              <p>Get Started</p>
            </button>
          </div>
          {/*
          <div className="learn-more-button">
            <button id="learn_more">
              <p>Learn More →</p>
            </button>
  </div>*/}
        </div>
      </div>
    </>
  );
}
