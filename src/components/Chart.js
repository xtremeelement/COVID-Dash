import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import CountUp from "react-countup";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardHeader } from "@material-ui/core";

export default function Cart() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://covidtracking.com/api/v1/us/daily.json").then((res) => {
      setData(res.data.reverse().slice(50));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader title="Loading" />
        <CardContent>
          <Typography variant="h5"></Typography>
        </CardContent>
      </Card>
    );
  } else {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    return (
      <Grid className="usaChart" justify="center">
        <Grid containeritem m={6}>
          <Line
            data={{
              labels: data.map(({ date }) => date),
              datasets: [
                {
                  data: data.map((data) => data.death),
                  label: "Total Deaths",
                  borderColor: "red",
                  backgroundColor: "rgba(255, 0, 0, .9)",
                  fill: true,
                },
                {
                  data: data.map((data) => data.hospitalized),
                  label: "Total Hospitalized",
                  borderColor: "green",
                  backgroundColor: "rgba(0, 255, 0, .7)",
                  fill: true,
                },
              ],
            }}
          />
        </Grid>
        <Grid item m={6}>
          <Line
            data={{
              labels: data.map(({ date }) => date),
              datasets: [
                {
                  data: data.map((data) => data.positive),
                  label: "Total Cases",
                  borderColor: "blue",
                  backgroundColor: "rgba(0, 0, 255, .7)",
                  fill: true,
                },
              ],
            }}
          />
        </Grid>
        <Grid item m={12}>
          <Line
            data={{
              labels: data.map(({ date }) => date),
              datasets: [
                {
                  data: data
                    .map(
                      (data) =>
                        (Math.round(data.positive).toFixed(2) /
                          Math.round(data.negative).toFixed(2)) *
                        100
                    )
                    .reverse(),
                  label: "Percentage Positive vs Negative",
                  borderColor: "orange",
                  backgroundColor: "rgba(255, 165, 0, .7)",
                  fill: true,
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    );
  }
}
