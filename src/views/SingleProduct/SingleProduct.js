import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
import arrowIcon from "../../assets/icons/back.svg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 100,
    width: 100,
  },
});

const SingleProduct = (props) => {
  const { name, desc, image } = props.location.state;
  const classes = useStyles();
  return (
    <>
      <Link to="/products">
        <button className="goBackButton">
          <img src={arrowIcon} alt="go back" className="goBackLink" />
        </button>
        <p className="goBackText"> go back to products</p>
      </Link>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default SingleProduct;
