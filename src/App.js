import React, { useState } from "react";
import FormParking from "./FormParking";
import ParkingRecipt from "./ParkingRecipt";
import AdminPanel from "./AdminPanel";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
}));
export default function App() {
  const classes = useStyles();
  let history = useHistory();

  const [details, setDetails] = useState({});

  const [showForm, setShowForm] = useState(true);
  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };
  const parking2 = [];
  for (let i = 0; i < 20; i++) {
    parking2.push({ spotName: "B" + i, isTaken: false, carNumber: "" });
  }
  const [parking, setParking] = useState([...parking2]);
  const updateDetails = (obj) => {
    setDetails({ ...obj, place: chooseParking(obj.carNumber) });
    console.log(history, "history");
    history.replace('/recipt');
  };
  const chooseParking = (carNumber) => {
    //console.log(parking, "what");
    let ind = parking.findIndex((park) => !park.isTaken);
    //console.log(ind, "why");

    if (ind >= 0) {
      let name = parking[ind].spotName;
      let parks = parking;
      parks[ind] = { ...parks[ind], isTaken: true, carNumber: carNumber };
      setParking([...parks]);
      //console.log(ind, parking, parking[ind].spotName);
      return name;
    }
    return "none";
  };

  return (
    <div className="App">
      <Switch>
        
        <Route path="/recipt">
          <Grid
            container
            direction="column"
            className={classes.container}
            alignItems={"center"}
            justify={"center"}
            alignContent={"center"}
          >
            <ParkingRecipt details={details} goBack={() => history.push("/")} />
          </Grid>
        </Route>
        <Route path="/admin">
          <AdminPanel parking={parking} goBack={() => history.push("/")} />
        </Route>
        <Route exact path="/">
          <Grid
            container
            direction="column"
            className={classes.container}
            alignItems={"center"}
            justify={"center"}
            alignContent={"center"}
          >
            <FormParking updateDetails={updateDetails} goAdmin={() => history.push("/admin")} />
          </Grid>
        </Route>
      </Switch>
    </div>
  );
}
