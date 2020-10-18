import React, { useState, useEffect } from "react";

import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
//import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
//import { ExpandMoreIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
/*     width: "40vw",
    height: "50vh",
    flexDirection: "column",
    marginTop: "10vh",
    marginLeft: "30vw" */
  },
  button: {
      //width: '100%',
      backgroundColor: 'purple',
      color: 'white',
      marginTop: '1vh',
      padding: '14px',
      borderRadius: '2rem',
      "&:hover": {
        backgroundColor: '#560156',
        

    },

  }
}));

export default function FormParking(props) {
  const classes = useStyles();
  const [fullName, setFullName] = useState("");
  const [carNumber, setCarNumber] = useState(""); //regexp for validation
  const [carType, setCarType] = useState("");
  const [times, setTimes] = useState(new Date().toLocaleDateString());
  const { updateDetails, goAdmin } = props;

  return (<>
    <Typography variant={'h2'}>Register</Typography>
    <br />
    <Grid item xs={10} sm={6} md={3}>
        
        <TextField
          label="Full Name"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Car Number"
          variant="outlined"
          value={carNumber}
          fullWidth
          margin="normal"
          onChange={(e) => setCarNumber(e.target.value)}
        />
        <TextField
          label="Car Type"
          variant="outlined"
          value={carType}
          fullWidth
          margin="normal"
          onChange={(e) => setCarType(e.target.value)}
        />
        <Button fullWidth className={classes.button} 
          onClick={() => {
            updateDetails({
              fullName: fullName,
              carNumber: carNumber,
              carType: carType,
              times: times
            });
          }}
        >
          Get parking number
        </Button>
        <Button fullWidth className={classes.button} 
          onClick={goAdmin}
        >
          Go to admin
        </Button>
    </Grid>
    </>
  );
}
