import React from "react";
import "./search.css";
import instalogo from "./img/insta logo.jpg";
import instaspelled from "./img/insta spelled.png";
import compass from "./img/compass.png";
import add from "./img/add.png";
import heart from "./img/heart.png";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="items">
        <div className="logos">
          <img src={instalogo} />
          <img src={instaspelled} className="instaspelled" />
        </div>
        <input placeholder="Search" />
        <div className="smallicon">
          <img src={compass} />
          <img src={heart} />
          <img src={add} />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
