import React from "react";
import "../assets/css//BodyInfo.css";
import image_one from "../assets/a1.jpg";
import image_two from "../assets/a2.jpg";

export function BodyInfo() {
  return (
    <div className="BodyInfo">
      <div>
        <h1 className="title">Idea Sharing</h1>
        <h3 className="message">Create teams and work</h3>
        <text className="t1">
          On this website you can share your ideas, find new people that have
          similar interests
        </text>
        <img src={image_one} alt="first image" className="image_one" />
        <img src={image_two} alt="second image" className="image_two" />
        <div className="r2">
          <text className="t2">
            Our aim is to create a huge platform for software developers,
            enterpreneurs, people that would like to work as a team, to bring
            them all together and make a really good interaction between them in
            order to capture everyone’s interests
          </text>
        </div>
        <text className="t3">
          Work together and earn money for giving useful advice or completing
          the job
        </text>
      </div>
    </div>
  );
}
