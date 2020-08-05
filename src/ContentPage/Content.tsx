import React from "react";
import ProCard from "./ProCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";


const Content = () => {
 return (
    <Grid container spacing={3}>
      {coffeMakerList.map((c) =>{
        return ( 
          <Grid item xs={12} sm={6} md={3}  >
        <ProCard OldPrice= {c.OldPrice} title={c.title} SalePrice={c.SalePrice}  value={c.value} imageUrl={ c.imageUrl}/>
        </Grid>
        )
      })} 
    </Grid>
  );
};

export default Content;
