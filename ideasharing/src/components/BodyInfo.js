import React from "react";

export function BodyInfo() {
  return (
    <>
      <style type="text/css">
        {`
            .title {
                position: absolute;
                height: 104px;
                left: 9.38%;
                right: 9.38%;
                top: 100px;

                font-family: Inter;
                font-style: normal;
                font-weight: 800;
                font-size: 96px;
                line-height: 104px;

                color: #2D3436;
                text-shadow: 0px 4px 0px #FFFFFF;
            }
            .message {
                position: absolute;
                height: 80px;
                left: 23.26%;
                right: 23.26%;
                top: 206px;

                font-family: Inter;
                font-style: normal;
                font-weight: 900;
                font-size: 64px;
                line-height: 77px;
                display: flex;
                align-items: flex-end;
                text-align: center;
                letter-spacing: -1px;

                color: #2D3436;
            }
            .t1 {
                position: absolute;
                height: 102px;
                left: 9.38%;
                right: 71.88%;
                top: 440px;

                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 32px;

                color: #2D3436;
            }
            .r2 {
                position: absolute;
                left: 9.38%;
                right: 71.88%;
                top: 540px;
                bottom: 0%;
                height: 380px;

                background: #FDCB6E;
                border-radius: 20px;
            }
            .t2 {
                position: absolute;
                left: 16px;
                right: 16px;
                top: 16px;
                bottom: 16px;

                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 32px;

                text-align: center;
                letter-spacing: 0.2px;

                color: #2D3436;
            }
            .t3 {
                position: absolute;
                height: 78px;
                left: 64.93%;
                right: 9.38%;
                top: 520px;

                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 32px;
                color: #2D3436;
            }
        `}
      </style>
      <div>
        <h1 className="title">Idea Sharing</h1>
        <h3 className="message">Create teams and work</h3>
        <text className="t1">
          On this website you can share your ideas, find new people that have
          similar interests
        </text>
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
    </>
  );
}
