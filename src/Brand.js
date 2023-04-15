import React from "react";
import "./Brand.css";
import Image from "./Image";

// import Brandimg from "./images/nutz.jpeg";

function Brand() {

  
  return (
    <div className="brand-header">
      <div className="brand-today">
        <h1>
          Come let's feed your <br></br>
          Brand Today
        </h1>
        <p>We will help to bring your wildest ideas to life.</p>

        <div className="video-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>{" "}
          Watch who, how and where
        </div>
      </div>

      <div className="brand-img">

     
        {/* <img src={Brandimg} /> */}
      </div>
      <Image/>
    </div>
  );
}

export default Brand;
