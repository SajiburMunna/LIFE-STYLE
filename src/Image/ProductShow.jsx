import React from "react";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 400,
    width: 300,
    marginBottom: 10,
  },
  media: {
    height: 300,
  },
  margin: { marginLeft: 10 },
});

const ProductShow = ({ pd }) => {
  let history = useHistory();
  function handleClick(id) {
    history.push(`/productdetails/${id}`);
  }
  const title = pd.title.substr(0, 30);
  const classes = useStyles();
  return (
    <div onClick={() => handleClick(pd.id)}>
      <Box className={classes.margin}>
        <Box p={1} bgcolor="grey.300">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={pd.image}
                title="Contemplative Reptile"
              />

              <CardContent>
                {/* <Link to={`/productdetails/${pd.id}`}>
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                </Link> */}
                <Typography gutterBottom variant="h6">
                  {title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default ProductShow;
