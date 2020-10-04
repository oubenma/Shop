import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import SideDescription from "../components/SideDescription";
import { coffeMakerList } from "../components/constants";
import ReviewsSection from "../components/ReviewsSection";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: "60px",
      paddingBottom: "60px",

      marginLeft: "300.667px",
    },
    root: {
      backgroundColor: "#ffffff",
    },
    container2: {
      paddingTop: "40px",
      paddingBottom: "40px",
      marginRight: "71.667px",
      marginLeft: "71.667px",
    },
    container3: {
      paddingBottom: "20px",
      marginRight: "30.667px",
      marginLeft: "30.667px",
    },
    container4: {
      paddingBottom: "60px",
      paddingTop: "60px",

      marginRight: "71.667px",
      marginLeft: "71.667px",
    },
    container5: {
      paddingBottom: "60px",
      paddingTop: "60px",
      marginRight: "71.667px",
      marginLeft: "71.667px",
    },
    paper: {
      height: "1733px",
      textAlign: "center",
      color: "black",
      backgroundColor: "red",
    },
    paper1: {
      backgroundColor: "red",
    },
    paper2: {
      height: "110px",
      textAlign: "center",
      color: "black",
      backgroundColor: "blue",
    },
    paper3: {
      height: "130px",
      textAlign: "center",
      color: "black",
      backgroundColor: "#ff99ff",
    },
    paper4: {
      height: "110px",
      textAlign: "center",
      color: "black",
      backgroundColor: "#66ccff",
    },
    paper5: {
      height: "344px",
      textAlign: "center",
      color: "black",
      backgroundColor: "#4dffdb",
      position: "relative",
    },
  })
);
function Product() {
  const classes = useStyles();
  const [hajar, setHajar] = useState(0);
  useEffect(() => {
    console.log("rani khdmt");
  }, []);
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {

  //   setOpen(false);
  // };
  const images = [
    {
      original: "https://picsum.photos/600/550",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/600/550/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/600/500",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/600/500",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/600/500",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/600/500",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <NavBar />

      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              {/* image galery */}
              {/* {/*  */}
              <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
              />

              {/* end image gallery */}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              {/* description of the produdct here */}
              <SideDescription />
              {/*end  description of the produdct here */}
            </Grid>
          </Grid>
        </div>
        <div className={classes.container2}>
          <div>partie dyal frequently bought together</div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper3}>togrther bought</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper4}>PRICE of the product</Paper>
            </Grid>
          </Grid>
        </div>
        {/* reviews section here */}
        <div className={classes.container3}>
          <ReviewsSection />
        </div>

        {/*end reviews here */}
        <div className={classes.container4}>
          <div>partie dyla you may also like</div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper5}>XI HAJA</Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper5}> second haja</Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper5}> third haja</Paper>
            </Grid>
          </Grid>
        </div>
        {/* dont forget alingItem ens justify resize images  and the eight of review section*/}
        <div className={classes.container5}>
          <div>partie dyal similar products</div>
          <Grid container spacing={3}>
            {coffeMakerList.map((product) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <ProductCard
                    OldPrice={product.OldPrice}
                    title={product.title}
                    SalePrice={product.SalePrice}
                    value={product.value}
                    imageUrl={product.imageUrl}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Product;
