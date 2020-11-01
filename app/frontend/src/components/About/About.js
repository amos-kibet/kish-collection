// Modules
import React from "react";
import { pure } from "recompose";

import "./About.css";

// Assets (images)
import farmer from "../../assets/un_farmer.jpg";
import consumer from "../../assets/person-eating-steak-or-red-meat.jpg";
import agric_expert from "../../assets/Agriculture-expertjpg.jpg";
import sdg_goal1_image from "../../assets/sdg-#1-end-poverty.png";
import sdg_goal2_image from "../../assets/sdg-#2-zero-hunger.png";

// Material UI
import { purple } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

import InfoIcon from "@material-ui/icons/Info";

const style = {
  style1: {
    fontSize: "30",
    color: purple["A400"],
    marginRight: 10,
    marginBottom: -5,
  },
};

function About() {
  return (
    <div className="about-container">
      <div>
        <CssBaseline />
        <h1>
          <InfoIcon style={style.style1} />
          About Us
        </h1>
      </div>

      <div>
        <h2>Who We Are</h2>
        <div className="section-field">
          <div>
            <h4>We are Kish Collection, Mercy's shoe game. Kish is a nickname of Mercy.</h4>
            <p>
              Mercy's shoe game is a collection of shoes of various brands and sizes.
              <br />
              The shoes are up for grabs at affordable prices.
              Choose for yourself and checkout with us for amazing discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pure(About);

// Route:
// GET /about
