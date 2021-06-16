import React from "react";

export default function AboutUs() {
  return (
    <div className="about" style={{ backgroundColor: "white" }}>
      <div
        className="jumbotron text-center"
        style={{ backgroundColor: "#fbfcfc" }}
      >
        <h1 style={{ fontFamily: "all" }}>
          <b>About us</b>
        </h1>
        <p>About our idea-sharing project </p>
      </div>

      <div className=".container-fluid">
        <div className="row">
          <div className="col-6" style={{ padding: "50px" }}>
            <h1 style={{ fontFamily: "all" }}>
              {" "}
              <b>Our vision</b>
            </h1>
            <hr />
            <p style={{ fontFamily: "arial", fontSize: "24px" }}>
              Creators of this site are students of Astana IT Univesity. Our
              names are: Abylay, Asset and Dias. We were inspired by the
              ideaconnection website and wanted to created something similar,
              but our own. Main goals of this platform are to gather all
              software developers together, develop their skills by cooperating
              in various projects, sharing ideas, building your own circle of
              friends that have same interests. People can discover different
              projects and propose their own.
            </p>
          </div>

          <div className="col-6" style={{ height: "200px", padding: "50px" }}>
            <center>
              <img
                style={{ width: "600px", height: "400px" }}
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </center>
          </div>
        </div>
        <hr style={{ width: "900px" }} />

        <div className="row">
          <div className="col-6" style={{ padding: "40px" }}>
            <center>
              <img
                style={{ width: "600px", height: "400px" }}
                src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </center>
          </div>

          <div className="col-6" style={{ height: "200px", padding: "50px" }}>
            <h1 style={{ fontFamily: "all" }}>
              {" "}
              <b>Our mission</b>
            </h1>
            <hr />
            <p style={{ fontFamily: "arial", fontSize: "24px" }}>
              Our mission was to connect 3 main things: idea-sharing, teamwork
              and programming skills together. Every user of the website shares
              some ideas, projects, features and tricks that influence the
              community of the site. In our opinion it's incredible that
              programmers can build a team and develop a project together,
              sharing experience and own skills with each other. The most
              important thing here is to know how to code. But if you don't know
              how to program, you can easily find people that will help you.
            </p>
          </div>
        </div>

        <hr style={{ width: "900px" }} />

        <div className="row">
          <div className="col-6" style={{ padding: "50px" }}>
            <h1 style={{ fontFamily: "all" }}>
              {" "}
              <b>Our process</b>
            </h1>
            <hr />
            <p style={{ fontFamily: "arial", fontSize: "24px" }}>
              We worked each week on this project. Abylay was mostly busy with
              backend, Asset and Dias worked on frontend and design of the
              website. In the beginning we chose the appropriate content for
              this website, worked on some features. For example using this
              website investors can find the best IT specialists for their
              companies thanks to the idea's popular chart, where you can find
              the best ideas. If you have any propositions how to develop our
              website, contact us, information is down below.
            </p>
          </div>

          <div className="col-6" style={{ height: "200px", padding: "50px" }}>
            <center>
              <img
                style={{ width: "600px", height: "400px" }}
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9mZmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </center>
          </div>
        </div>

        <div
          className="jumbotron text-center"
          style={{ backgroundColor: "#eaeded" }}
        >
          <h3 style={{ fontFamily: "all" }}>
            <b>Team members</b>
          </h3>

          <a>Asset Kanatov | </a>

          <a>Dias Karibaev | </a>

          <a>Abylay Ayip </a>
        </div>
      </div>
    </div>
  );
}
