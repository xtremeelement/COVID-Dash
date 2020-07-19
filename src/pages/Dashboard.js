import React from "react";
import "../App.css";
import Chart from "../components/Chart";
import Snapshot from "../components/Snapshot";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import EqualizerIcon from "@material-ui/icons/Equalizer";

// const useStyles = makeStyles({
//   root: {
//     width: "80%",
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: "#222222",
//     color: "white",
//     backgroundImage: "url(https://i.imgur.com/lPJE0Xg.jpg)",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   },
// });

export default function Dashboard() {
  // const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} justify="center" className="test">
          <h4 className="banner">
            <EqualizerIcon fontSize="inherit" />
            COVID Tracker USA
          </h4>
        </Grid>
        <Grid item xs={12} justify="center">
          <Navbar className="navbar" />
        </Grid>
        <Grid item xs={12} justify="center" className="world">
          <Snapshot />
        </Grid>
        <Grid item xs={12} justify="center">
          <Chart />
        </Grid>
        <p className="footer">
          This site was created and maintained by{" "}
          <a href="http://brandondownhour.com" target="_blank">
            Brandon Downhour
          </a>
        </p>
      </Grid>
    </div>
  );
}
