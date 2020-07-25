import React, { useEffect, useState } from "react";
import "../App.css";
import Chart from "../components/Chart";
import Snapshot from "../components/Snapshot";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import axios from "axios";

export default function News() {
  let [data, setData] = useState([]);
  let [news, setNews] = useState([]);
  let [loading, setLoading] = useState(true);
  let key = "876539bc5fdb4e2196c7c3eb49304774";
  let url =
    "https://newsapi.org/v2/everything?q=covid&apiKey=876539bc5fdb4e2196c7c3eb49304774";

  useEffect(() => {
    axios.get(url).then((res) => {
      let stuff = res.data.articles;
      setData(
        stuff
          .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
          .splice(15)
      );
      //   setData(stuff);
      setLoading(false);
      console.log(stuff);
    });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log(data);

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
          <Grid item xs={12} justify="center">
            <h5>Latest News</h5>
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
}
