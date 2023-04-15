import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="feature-header">
      <div className="Features-img">
        <img src="https://nutz.in/assets/img/demo/coworking/illustration01.svg" />
      </div>

      <div className="feature-content">
        <h2>How We Are</h2>

        <div className="logo-header">
          <div className="logo-feature">
            <img src="https://nutz.in/assets/img/demo/coworking/icons/tv.svg" />
            <p>Like-minded Peers</p>
          </div>

          <div className="logo-feature">
            <img src="https://nutz.in/assets/img/demo/coworking/icons/sandwich.svg" />
            <p>Flexible Timings</p>
          </div>

          <div className="logo-feature">
            <img src="https://nutz.in/assets/img/demo/coworking/icons/table-tennis.svg" />
            <p>Relax Zone</p>
          </div>

          <div className="logo-feature">
            <img src="https://nutz.in/assets/img/demo/coworking/icons/living-room.svg" />
            <p>Casual Dress Code</p>
          </div>

          <div className="logo-feature">
            <img src="https://nutz.in/assets/img/demo/coworking/icons/router.svg" />
            <p>High Potential for Career Growth</p>
          </div>

          <div className="logo-feature">
            <img src="https://nutz.in/assets/img/demo/coworking/icons/open-book.svg" />
            <p>Hyper-Growth Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
