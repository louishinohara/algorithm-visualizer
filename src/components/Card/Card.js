import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
    // minWidth: 375,
    margin: "20px",
    color: "#ffffff",
    backgroundColor: "#424242",
  },
  media: {
    height: 375,
    width: "90%",
    margin: "5%",
  },
});

const MediaCard = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent>
            <Typography gutterBottom component="h2" variant="h4">
              {props.title}
            </Typography>
            <Typography variant="h5" color="#ffffff" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default MediaCard;
