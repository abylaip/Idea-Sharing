import React from "react";
import gray from "../assets/gray.png";
import yellow from "../assets/yellow.png";
import green from "../assets/green.png";
import "../cssFiles/SiteFeatures.css";
import { Link } from "react-router-dom";

export function SiteFeatures() {
  return (
    <div className="SiteFeatures">
      <div>
        <h2 className="featName">Choose your account features</h2>
        <h4 className="message_1">Here you can create an account</h4>
        <div class="flex-container">
          <div className="devs">
            <p className="accTitles">Software Developer</p>
            <h3>Wants to</h3>
            <br />
            <div className="inner">
              <img src={gray} />
              <label>Develop own skills</label>
            </div>
            <br />
            <div className="inner">
              <img src={gray} />
              <label>Earn money</label>
            </div>
            <br />
            <div className="inner">
              <img src={gray} />
              <label>Share ideas</label>
            </div>
            <br />
            <Link to="/registration">
              <button className="withBorder">Register</button>
            </Link>
          </div>
          <div className="enters">
            <p className="accTitles">Enterpreneur</p>
            <h3>In search of</h3>
            <br />
            <div className="inner">
              <img src={yellow} />
              <label>Software Developers</label>
            </div>
            <br />
            <div className="inner">
              <img src={yellow} />
              <label>Start-up projects</label>
            </div>
            <br />
            <div className="inner">
              <img src={yellow} />
              <label>Business ideas</label>
            </div>
            <br />
            <Link to="/registration">
              <button className="withoutBorder">Sign up</button>
            </Link>
          </div>
          <div className="teams">
            <p className="accTitles">Team</p>
            <h3>Their goal is</h3>
            <br />
            <div className="inner">
              <img src={green} />
              <label>To create a start-up project</label>
            </div>
            <br />
            <div className="inner">
              <img src={green} />
              <label>Developer team skills</label>
            </div>
            <br />
            <div className="inner">
              <img src={green} />
              <label>Find an enterpreneur</label>
            </div>
            <br />
            <Link to="/registration">
              <button className="withBorder">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
