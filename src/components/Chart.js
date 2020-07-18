import React from "react";
// import { Line, Bar } from "react-chartjs-2";
import data from "../data/data.json";

export default function Chart() {
  return (
    <div>
      {/* <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      /> */}
      <h1>Hello World</h1>
    </div>
  );
}
