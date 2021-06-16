import React from "react";
import "../assets/css/ModalMoreInfo.css";

export default function ModalMoreInfo({ show, hide, user }) {
  return (
    <div
      className="modal-more-info"
      style={{ opacity: show ? "1" : "0", position: show ? "absolute" : "" }}
    >
      <div className="modal-header">
        More information
        <span onClick={hide} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <table className="modal-table">
            <tr>
              <th>Full name:</th>
              <th>{user.fullname}</th>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Position:</td>
              <td>{user.position}</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>{user.location}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="modal-footer">
        <button onClick={hide} className="btn-cancel">
          Close
        </button>
      </div>
    </div>
  );
}
