import { Grid2, Paper } from "@mui/material";
import React from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={3}>
        <Paper sx={{ padding: 2 }}>
          <TypeBar />
        </Paper>
      </Grid2>
      <Grid2 item xs={9}>
        <BrandBar />
        <DeviceList />
      </Grid2>
    </Grid2>
  );
};

export default Shop;
