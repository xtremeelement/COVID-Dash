import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

export default function Snapshot() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let blah;
    setLoading(true);
    axios
      .get("https://covidtracking.com/api/v1/us/current.json")
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Grid container spacing={5} className="test" justify="center">
        <Grid item m={3}>
          <Card style={{ width: "300px" }}>
            <CardContent>
              <div>
                <Typography variant="h4">
                  <p>Total Deaths</p>
                  <CountUp start={1} end={data.death} duration={3} />
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item m={3}>
          <Card style={{ width: "300px" }}>
            <CardContent justify="center">
              <div>
                <Typography variant="h4">
                  <p>Total Cases</p>
                  <CountUp start={1} end={data.positive} duration={3} />
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item m={3}>
          <Card style={{ width: "300px" }}>
            <CardContent>
              <div>
                <Typography variant="h4">
                  <p>Currently Hospitalized</p>
                  <CountUp
                    start={1}
                    end={data.hospitalizedCurrently}
                    duration={3}
                  />
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
