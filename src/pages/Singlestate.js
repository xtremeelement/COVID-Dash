import React, { useEffect, useState } from "react";
import "../App.css";
import Chart from "../components/Chart";
import Snapshot from "../components/Snapshot";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import Stateshot from "../components/Stateshot";
import CountUp from "react-countup";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     justifyContent: "center
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default function Singlestate(props) {
  //   const classes = useStyles();

  let [states, setStates] = useState([]);
  let [allStates, setallStates] = useState([]);
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  let state = props.match.params.state;
  state = state.toLowerCase();

  useEffect(() => {
    axios
      .get(`https://covidtracking.com/api/v1/states/${state}/daily.json`)
      .then((res) => {
        setStates(res.data.reverse());
        setLoading(false);
      });
    axios
      .get("https://covidtracking.com/api/v1/states/current.json")
      .then((res) => {
        setallStates(res.data);
      });
  }, []);

  const handleChange = (event) => {
    window.location.href = `/states/${event.target.value}`;
  };

  if (loading) {
    return (
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
      </Grid>
    );
  } else {
    try {
    } catch (error) {
      console.log(error);
    }
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
          <Grid item xs={12}>
            <Stateshot currentState={state} />
          </Grid>
          <Grid container item xs={12} justify="center">
            <FormControl className="dropDown" justify="center">
              <InputLabel id="demo-simple-select-helper-label">
                Select State
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value="hello"
                onChange={handleChange}
              >
                {allStates.map((state) => {
                  return <MenuItem value={state.state}>{state.state}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Select a state to see its data</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={1} justify="center">
            <Grid item xs={10}>
              <h5>Toggle legend to see data.</h5>
              <Line
                data={{
                  labels: states.map(({ date }) => date),
                  datasets: [
                    {
                      data: states.map((data) => data.positiveIncrease),
                      label: "Daily Cases",
                      borderColor: "blue",
                      backgroundColor: "rgba(0, 0, 255, .7)",
                      fill: true,
                    },
                    {
                      data: states.map((data) => data.deathIncrease),
                      label: "Daily Deaths",
                      borderColor: "red",
                      backgroundColor: "red",
                      fill: true,
                    },
                    {
                      data: states.map((data) => data.hospitalizedIncrease),
                      label: "Daily Hospitalizations",
                      borderColor: "green",
                      backgroundColor: "green",
                      fill: true,
                    },
                  ],
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <h5>Toggle legend to see data.</h5>
              <Line
                data={{
                  labels: states.map(({ date }) => date),
                  datasets: [
                    {
                      data: states
                        .map(
                          (data) =>
                            (Math.round(data.positive).toFixed(2) /
                              Math.round(data.negative).toFixed(2)) *
                            100
                        )
                        .reverse(),
                      label: "Precentage Positive",
                      borderColor: "orange",
                      backgroundColor: "rgba(255, 165, 0, .7)",
                      fill: true,
                    },
                  ],
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <h5>Toggle legend to see data.</h5>
              <Line
                data={{
                  labels: states.map(({ date }) => date),
                  datasets: [
                    {
                      data: states.map((data) => data.positive),
                      label: "Total Cases",
                      borderColor: "blue",
                      backgroundColor: "rgba(0, 0, 255, .7)",
                      fill: true,
                    },
                    {
                      data: states.map((data) => data.death),
                      label: "Total Deaths",
                      borderColor: "red",
                      backgroundColor: "red",
                      fill: true,
                    },
                    {
                      data: states.map((data) => data.hospitalized),
                      label: "Total Hospitalizations",
                      borderColor: "green",
                      backgroundColor: "green",
                      fill: true,
                    },
                  ],
                }}
              />
            </Grid>
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
}
