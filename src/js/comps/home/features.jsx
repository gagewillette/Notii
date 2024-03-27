import React from "react";
import "../../styles/features.scss";
import cloud from "../../assets/cloud_FILL0_wght400_GRAD0_opsz24.svg"

export default function Features() {
  return (
    <>
      <div className="features-wrapper">
        <div className="features-text">
          <h3>Features</h3>
          <h2>Powerful Features that Enhance Your Note-Taking Experience</h2>
        </div>

        <div className="grid-wrapper">
          <div className="grid-container">
            <div className="grid-item">
              <div className="icon"><img src={cloud} width={40} /></div>
              <div className="text">Cloud storage Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum repellat ipsa, officiis eveniet consequuntur quis odio, eligendi ex neque ullam, mollitia laudantium? Asperiores odio veritatis, perferendis ut deleniti enim.
              </div>
            </div>
            <div className="grid-item"><div className="icon"><img src={cloud} width={40} /></div>
              <div className="text">Cloud storage Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum repellat ipsa, officiis eveniet consequuntur quis odio, eligendi ex neque ullam, mollitia laudantium? Asperiores odio veritatis, perferendis ut deleniti enim.
              </div></div>
            <div className="grid-item"><div className="icon"><img src={cloud} width={40} /></div>
              <div className="text">Cloud storage Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum repellat ipsa, officiis eveniet consequuntur quis odio, eligendi ex neque ullam, mollitia laudantium? Asperiores odio veritatis, perferendis ut deleniti enim.
              </div></div>
            <div className="grid-item"><div className="icon"><img src={cloud} width={40} /></div>
              <div className="text">Cloud storage Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum repellat ipsa, officiis eveniet consequuntur quis odio, eligendi ex neque ullam, mollitia laudantium? Asperiores odio veritatis, perferendis ut deleniti enim.
              </div></div>
          </div>
        </div>
      </div>
    </>
  );
}
