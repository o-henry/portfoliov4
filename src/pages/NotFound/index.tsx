import React from "react";
import { Link } from "react-router-dom";

const NotFound = (content: any) => {
  return (
    <div id="notfound">
      <div className="notfound-bg"></div>
      <div className="notfound">
        <div className="notfound-404">
          <h1 className="notfound_title">404</h1>
        </div>
        <h2>{content.header}</h2>
        <Link className="home-btn" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
