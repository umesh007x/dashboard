import React from "react";
import { Chart as ChartJs, registerables, defaults } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import repair from "../assets/img/repair.png";

ChartJs.register(...registerables);
defaults.font.family = "Poppins";

const Analytics = () => {
  const getDoughnutData = (data) => {
    return {
      labels: [
        "45000 Service Charges",
        "30000 Spares",
        "10000 AMC",
        "15000 CMC",
      ],
      datasets: [
        {
          label: "",
          data: data,
          backgroundColor: [
            "#004F95",
            "#3DA5D9",
            "#FEC601",
            "#EA7317",
            "#73BFB8",
            "#EA7317",
          ],
          barThickness: 60,
        },
      ],
    };
  };

  const getDoughnutOptions = (cut) => {
    return {
      cutout: cut,
      elements: { arc: { borderWidth: 8 } },
      plugins: {
        legend: { display: false },

        outerLabels: {
          formatter: (val) => {
            return val + "umes";
          },
        },
      },
    };
  };

  return (
    <>
      <div className="analytics">
        <div className="analytics__tiles">
          <div className="analytics__tiles--tile">
            <h3 className="analytics__tiles--title">Expenses</h3>
            <div style={{ width: "90%" }} className="analytics__tiles--chart">
              <Doughnut
                data={getDoughnutData([40, 30, 20, 10])}
                options={getDoughnutOptions(35)}
              />
            </div>
          </div>
          <div className="analytics__tiles--tile">
            <h3 className="analytics__tiles--title">In service</h3>
            <div className="analytics__tiles--image">
              <img src={repair} alt="" />
            </div>
            <div className="analytics__tiles__repair">
              <div className="analytics__tiles__repair--1">
                <p>Total services</p>
                <h2>38</h2>
              </div>
              <div className="analytics__tiles__repair--2">
                <p>Open services</p>
                <h2>18</h2>
              </div>
            </div>
          </div>
          <div className="analytics__tiles--tile">
            <h3 className="analytics__tiles--title">Total Assets</h3>
            <div className="analytics__tiles--asset">
              <Doughnut
                data={getDoughnutData([40, 20, 15, 12, 7, 6])}
                options={getDoughnutOptions(50)}
              />
            </div>
            <h3 className="asset">46</h3>
          </div>
          <div className="analytics__tiles--tile">
            <h3 className="analytics__tiles--title">Incident Management</h3>
            <div style={{ width: "100%" }}>
              <div className="incident">
                <p>Cleared</p>
                <div className="incident__first">
                  <div className="incident__first--bar"></div>
                  <h3>36</h3>
                </div>
              </div>
              <div className="incident">
                <p>Not cleared</p>
                <div className="incident__second">
                  <div className="incident__second--bar"></div>
                  <h3>16</h3>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Analytics;
