import React, { useState } from "react";

import {
  Button,
  Grid,
  TextField,
  Typography,
  Collapse,
  Divider,
  IconButton
} from "@material-ui/core";
import {ExpandMore, ExpandLess}  from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'flex',
        marginTop: '1vh',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    details: {
        display: 'flex',
        alignItems: 'center',
    },
    valueText: {
        placeSelf: "flex-end",
    },
    container: {
        width: "50vw",
    },
    button: {
        margin: "2vh",
        color: 'white',
        marginTop: '1vh',
        padding: '14px',
        borderRadius: '2rem',
        backgroundColor: 'purple',
        "&:hover": {
            backgroundColor: '#560156',
            

        },
    },
    purpleText: {
        color: 'purple'
    }
}));

export default function ParkingRecipt(props) {
    const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);
  const { details, goBack } = props;
  //let place = chooseParking(details.carNumber);
  return (
    <>
    <Grid item className={classes.container}>
    
      <Typography className={classes.purpleText}>Created on: {new Date().toLocaleDateString()} </Typography>
      <Typography>Parking: {details.place}</Typography>
    <Grid item className={classes.details}>
      <Typography className={classes.purpleText}>Hide Details </Typography>
      <IconButton onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <ExpandMore className={classes.purpleText} /> : <ExpandLess className={classes.purpleText}/>}
      </IconButton>
      </Grid>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Grid item className={classes.inline}>
        <Typography className={classes.purpleText}>Full Name:</Typography>
        <Typography className={classes.valueText}>{details.fullName}</Typography>
        </Grid>
        <Divider />

        <Grid item className={classes.inline}>
        <Typography className={classes.purpleText}>Car Number:</Typography>
        <Typography>{details.carNumber}</Typography>
        </Grid>
        <Divider />

        <Grid item className={classes.inline}>
        <Typography className={classes.purpleText}>Car Type:</Typography>
        <Typography>{details.carType}</Typography>
        </Grid>
        <Divider />

      </Collapse>
      </Grid>
      <Button className={classes.button} onClick={goBack}> Go Back </Button>
    </>
  );
}
