import React from "react";
import "../App.css";
import Chart from "../components/Chart";
import Snapshot from "../components/Snapshot";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} justify="center">
          <Snapshot />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Chart />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Navbar />
        </Grid>
      </Grid>
    </div>
  );
}
