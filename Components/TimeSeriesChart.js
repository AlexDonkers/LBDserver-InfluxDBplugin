import React, { useEffect } from "react";
import Chart from "chart.js";

export default function TimeSeriesChart(props) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [props.t0, props.t1, props.t2, props.t3, props.t4, props.t5, props.t6, props.t7, props.t8, props.t9],
        datasets: [
          {
            label: props.property,
            data: [props.v0, props.v1, props.v2, props.v3, props.v4, props.v5, props.v6, props.v7, props.v8, props.v9],
            backgroundColor: [
              "rgb(233, 30, 99)",
            ],
            borderColor: ["rgb(245, 0, 87)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear'
        }]
        }
      }

    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}