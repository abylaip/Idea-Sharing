import React from "react";

export function SiteFeatures() {
  return (
    <div>
      <style type="text/css">
        {`     
            .featName {
                position: absolute;
                height: 155px;
                left: 30%;
                right: 30.42%;
                top: 1200px;

                font-family: Inter;
                font-style: normal;
                font-weight: 900;
                font-size: 64px;
                line-height: 77px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: -1px;

                color: #2D3436;
            }
            .message_1 {
                position: absolute;
                height: 40px;
                left: 30.21%;
                right: 30.21%;
                top: 1330px;

                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 48px;

                color: #ADADAD;
            }
            .table_1 {
                position: absolute;
                top: 1400px;
            }
            .accTitles {
                position: absolute;
                height: 32px;
                left: 0px;
                right: 90px;
                top: 0px;

                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 32px;

                display: flex;
                align-items: center;
                letter-spacing: 0.2px;

                color: #6C5CE7;
            }
        `}
      </style>
      <div>
        <h2 className="featName">Choose your account features</h2>
        <h4 className="message_1">Here you can create an account</h4>
        <table className="table_1" id="someTable">
          <tbody>
            <tr id="row0">
              <td id="devss">
                <div className="devs">
                  <p className="accTitles">Software Developer</p>
                  <h3>Wants to</h3>
                </div>
              </td>
              <td id="enterss">
                <div className="enters">
                  <p className="accTitles">Enterpreneur</p>
                  <h3>In search of</h3>
                </div>
              </td>
              <td id="teamss">
                <div className="teams">
                  <p className="accTitles">Team</p>
                  <h3>Their goal is</h3>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
