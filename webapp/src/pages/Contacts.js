import React from "react";

export default function Contacts() {
  return (
    <div className="contacts" style={{ backgroundColor: "white" }}>
      <div className=".container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://i.pinimg.com/originals/fd/51/f1/fd51f12ccd658e412109e419ac75f778.jpg"
            />
          </div>
          <div
            style={{ padding: "50px", backgroundColor: "#fefefe" }}
            className="col-sm-6"
          >
            <h2 style={{ fontFamily: "all" }}>
              <b>Contact us</b>
            </h2>
            <hr style={{ float: "left", width: "200px" }} />
            <br />
            <br />
            <div className="row">
              <div className="col-sm-6">
                <p
                  style={{
                    fontSize: "15px",
                    color: "lightgrey",
                    marginRight: "200px",
                  }}
                >
                  Email:
                  <br /> mailideasharing@gmail.com
                </p>
              </div>
              <div className="col-sm-6">
                <p
                  style={{
                    fontSize: "15px",
                    color: "lightgrey",
                    marginRight: "200px",
                  }}
                >
                  Phone:
                  <br /> 87082052659
                </p>
              </div>
            </div>
            <form>
              <h3 style={{ fontFamily: "all" }}>
                <b>Send your message</b>
              </h3>
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your personal information with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>

              <p>Message</p>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Your message</span>
                </div>

                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ float: "right", backgroundColor: "grey" }}
              >
                Submit
              </button>
            </form>
            <br />
            <br />
            <h6>
              <b>Follow us</b>
            </h6>
            <div className="row" style={{ padding: "20px" }}>
              <br />
              <div className="col-sm-3">
                <p style={{ fontSize: "15px", color: "lightgrey" }}>
                  <a>Instagram: @ideasharing</a>
                </p>
              </div>
              <div className="col-sm-3">
                <p style={{ fontSize: "15px", color: "lightgrey" }}>
                  <a>Vk: ideasharing</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
