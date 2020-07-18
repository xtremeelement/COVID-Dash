import React from "react";
import "../App.css";
import Chart from "../components/Chart";
import Snapshot from "../components/Snapshot";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#222222",
    color: "white",
    backgroundImage: "url(https://i.imgur.com/lPJE0Xg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export default function Dashboard() {
  const classes = useStyles();
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
