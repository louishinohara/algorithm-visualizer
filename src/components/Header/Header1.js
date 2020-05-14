import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import MediaCard from '../Card/Card';
export default class Header extends Component {

  render() {

    return (

      <Grid container direction="row" justify="center" style={{flexGrow: 1}}>
      <Grid item xs={12} >

            <Typography style={ { marginTop:100 }}>asda saasdasds</Typography>

      </Grid>
      </Grid>
    );
  }
}
