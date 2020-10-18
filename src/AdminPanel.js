import React, { useState } from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "80%",
  },
  out: {
    display: "flex",
    height: "100vh",
  },
  cardStyle: {
      height: '20vh',
      width: '7vw',
      textAlign: 'center',
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
    reddot: {
    height: '50px',
    width: '50px',
    backgroundColor: 'red',
    borderRadius: '50%',
    display: 'inline-block',

  },
  greendot: {
    height: '50px',
    width: '50px',
    backgroundColor: 'green',
    borderRadius: '50%',
    display: 'inline-block',
  },
  centerTraffic: {
    textAlign: 'center',
  }
}));

export default function AdminPanel(props) {
  const classes = useStyles();

  

  const Items = () => {
      let isFull = (props.parking.findIndex((park) => !park.isTaken) === -1) ? true : false;
    return props.parking.map((park, i) => {
        return (
            <>
            {i%10 ? (<></>) : (<Grid item xs={1} className={classes.centerTraffic}>
                <span className={ `${isFull ? classes.reddot : classes.greendot}`} />
            </Grid>)}
            <Grid key={park.spotName} item xs={1}>
                <Card className={classes.cardStyle}>
                    <Typography variant='h4'>{park.spotName}</Typography>
                    <Typography>{park.carNumber}</Typography>
                </Card>
            </Grid>
            </>
        )
    })
    
  }

  return (
    <Grid container
    className={classes.out}
      alignItems={"center"}
      justify={"center"}
      alignContent={"center"}
      direction="row">

      <Grid container item xs={12} spacing={2}
      className={classes.container}
        alignItems={"center"}
        justify={"center"}
        alignContent={"center"}
        direction="row">
           <Items />
      </Grid>
      <Grid item xs={3} >
      <Button fullWidth className={classes.button} onClick={props.goBack}>back</Button>
      </Grid>
      </Grid>

  )
}
