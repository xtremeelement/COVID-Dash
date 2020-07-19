import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HealingIcon from "@material-ui/icons/Healing";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    fill: "white",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="navbar"
    >
      <BottomNavigationAction
        href="/"
        link="/test"
        label="USA"
        icon={<HealingIcon style={{ fill: "black" }} />}
        style={{ color: "black" }}
      />
      <BottomNavigationAction
        href="/states"
        label="States"
        icon={<LocalHospitalIcon style={{ fill: "black" }} />}
        style={{ color: "black" }}
      />
      <BottomNavigationAction
        href="/news"
        label="News"
        icon={<FavoriteBorderIcon style={{ fill: "black" }} />}
        style={{ color: "black" }}
      />
    </BottomNavigation>
  );
}
