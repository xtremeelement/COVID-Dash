import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardHeader } from "@material-ui/core";

export default function Snapshot() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://covidtracking.com/api/v1/us/current.json")
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Card className="cardStuff">
        <CardHeader title="Loading" />
        <CardContent>
          <Typography variant="h5">
            <CountUp start={1} end={99999} separator="," duration={3} />
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    let displayDate;
    try {
      let year = data.date.toString().substring(0, 4);
      let month = data.date.toString().substring(4, 6);
      let day = data.date.toString().substring(6, 8);
      displayDate = `${month}/${day}/${year}`;
    } catch (error) {
      console.log(error);
    }

    return (
      <div>
        <Grid container spacing={5} justify="center">
          <Grid item m={3}>
            <Card className="cardStuff">
              <CardHeader title="TOTAL DEATHS" />
              <CardContent>
                <Typography variant="h5">
                  <CountUp
                    start={1}
                    end={data.death}
                    separator=","
                    duration={3}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item m={3}>
            <Card className="cardStuff">
              <CardHeader title="TOTAL CASES" />
              <CardContent justify="center">
                <Typography variant="h5">
                  <CountUp
                    start={1}
                    end={data.positive}
                    separator=","
                    duration={3}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item m={3}>
            <Card className="cardStuff">
              <CardHeader title="TOTAL HOSPITALIZED" />
              <CardContent>
                <Typography variant="h5">
                  <CountUp
                    start={1}
                    end={data.hospitalizedCurrently}
                    duration={3}
                    separator=","
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid>
          <Grid item m={12}>
            <Card className="latestData" justify="center">
              <CardHeader title="Latest Data" />
              <CardContent>
                <Typography variant="h5">
                  <p>{displayDate ? displayDate : "loading"}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
