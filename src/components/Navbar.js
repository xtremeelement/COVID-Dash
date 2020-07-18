import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HealingIcon from "@material-ui/icons/Healing";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    width: "80%",
    position: "absolute",
    bottom: 0,
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
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<HealingIcon />} />
      <BottomNavigationAction label="Favorites" icon={<LocalHospitalIcon />} />
      <BottomNavigationAction label="Nearby" icon={<FavoriteBorderIcon />} />
    </BottomNavigation>
  );
}
