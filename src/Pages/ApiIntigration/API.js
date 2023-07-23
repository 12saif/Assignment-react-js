import React from "react";
import CurrentLocation from "../../Components/Temp/CurrentLocation";
import "./API.css";

const API = () => {
  return (
    <div className="body">
      <React.Fragment>
        <div className="container-api">
          <CurrentLocation />
        </div>
        <div className="footer-info">
          | Developed by{" "}
          <a target="_blank" href="/">
            MD SAIF
          </a>{" "}
          | Powered by{" "}
        </div>
      </React.Fragment>
    </div>
  );
};

export default API;
