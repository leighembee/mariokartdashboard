import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Main from './Main';
import Players from './Players';

import './style.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Summary = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Main />
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Players />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Summary);
