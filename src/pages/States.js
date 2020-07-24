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

export default function States() {
  //   const classes = useStyles();

  let [states, setStates] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://covidtracking.com/api/v1/states/current.json")
      .then((res) => {
        setStates(res.data);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    window.location.href = `./states/${event.target.value}`;
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
                {states.map((state) => {
                  return <MenuItem value={state.state}>{state.state}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Select a state to see its data</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={1} justify="center">
            <Grid item xs={10}>
              <h5>Toggle the key to see the data</h5>
              <Bar
                data={{
                  labels: states.map(({ state }) => state),
                  datasets: [
                    {
                      data: states.map((state) => state.positive),
                      label: "Total Cases",
                      borderColor: "blue",
                      backgroundColor: "blue",
                    },
                    {
                      data: states.map((state) => state.death),
                      label: "Total Deaths",
                      borderColor: "red",
                      backgroundColor: "red",
                    },
                    {
                      data: states.map((state) => state.hospitalizedCurrently),
                      label: "Total Cases",
                      borderColor: "green",
                      backgroundColor: "green",
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
