import React from "react";
import { Chart as ChartJs, registerables, defaults } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(...registerables);
defaults.font.family = "Poppins";

const BarChart = () => {
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "",
        data: [12, 28, 6, 17, 22],
        backgroundColor: "#FEC601",
        barThickness: 60,
      },
    ],
  };
  const barChartOptions = {
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <>
      <div className="barchart">
        <h3 className="barchart__heading">Total Incidents Recorded</h3>
        <div className="barchart__options">
          <div className="barchart__options--left">
            <p>Days</p>
            <p>Week</p>
            <p>Month</p>
            <p>Custom</p>
          </div>
          <div className="barchart__options--right">
            <p>Recorded</p>
            <p>Cleared</p>
          </div>
        </div>
        <div className="barchart__line">
          <Bar
            height={80}
            type="bar"
            options={barChartOptions}
            data={barData}
          />
        </div>
        <div className="barchart__footer">
          <p className="barchart__footer--x">
            <span>X-axis</span> : Weeks
          </p>
          <p className="barchart__footer--y">
            <span>Y-axis</span> : Incidents
          </p>
        </div>
      </div>
    </>
  );
};
export default BarChart;
