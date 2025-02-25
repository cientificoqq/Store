import { Box, Paper } from "@mui/material";
import React from "react";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, marginTop: "20px" }}>
      <Paper sx={{ width: "250px", minWidth: "200px", padding: 2 }}>
        <TypeBar />
      </Paper>

      <Box sx={{ flexGrow: 1 }}>
        <BrandBar />
        <DeviceList />
      </Box>
    </Box>
  );
};

export default Shop;
