import React from "react";
import { Chart as ChartJs, registerables, defaults } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(...registerables);
defaults.font.family = "Poppins";
const RevAndDep = () => {
  const linData = {
    labels: ["1", " 2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "",
        data: [1, 2, 6, 3, 8, 6, 4, 6, 8],
        borderColor: "#004F95",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return (
    <>
      <div className="revandDep">
        <div className="revandDep__tiles">
          <div className="revandDep__tiles--1">
            <h3 style={{ textAlign: "center" }} className="barchart__heading">
              Departments
            </h3>
            <div className="revandDep__departments">
              <div className="revandDep__departments--1"></div>
              <div className="revandDep__departments--2"></div>
              <div className="revandDep__departments--3"></div>
              <div className="revandDep__departments--4"></div>
              <div className="revandDep__departments--5"></div>
            </div>
            <div className="progress">
              <p>Laboratory</p>
              <div className="progress__box">
                <div className="progress__container">
                  <div className="progress__val progress__val--1"></div>
                </div>
                <p>91</p>
              </div>
            </div>
            <div className="progress">
              <p>Radiology</p>
              <div className="progress__box">
                <div className="progress__container">
                  <div className="progress__val progress__val--2"></div>
                </div>
                <p>53</p>
              </div>
            </div>
            <div className="progress">
              <p>ICU</p>
              <div className="progress__box">
                <div className="progress__container">
                  <div className="progress__val progress__val--3"></div>
                </div>
                <p>98</p>
              </div>
            </div>
            <div className="progress">
              <p>Operation Theatre</p>
              <div className="progress__box">
                <div className="progress__container">
                  <div className="progress__val progress__val--4"></div>
                </div>
                <p>75</p>
              </div>
            </div>
            <div className="progress">
              <p>OPD</p>
              <div className="progress__box">
                <div className="progress__container">
                  <div className="progress__val progress__val--5"></div>
                </div>
                <p>36</p>
              </div>
            </div>
            <p className="seeAll">See More</p>
          </div>
          <div className="revandDep__tiles--2">
            <h3 className="barchart__heading">Total Downtime</h3>

            <div className="barchart__line">
              <Line
                height={100}
                type="bar"
                options={{ plugins: { legend: { display: false } } }}
                data={linData}
              />
            </div>
            <div className="revandDep__footer">
              <div className="barchart__footer revandDep__footer__container">
                <p className="barchart__footer--x">
                  <span>X-axis</span> : Weeks
                </p>
                <p className="barchart__footer--y">
                  <span>Y-axis</span> : Incidents
                </p>
              </div>
              <div className="revandDep__footer--downtime">
                <p>Total Downtime</p>
                <h3>12Days 3h 20m </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevAndDep;
