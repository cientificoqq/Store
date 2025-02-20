import React, { useContext } from "react";
import { Context } from "..";

import DeviceItem from "./DeviceItem";
import { Grid2 } from "@mui/material";

const DeviceList = () => {
  const { device } = useContext(Context);

  return (
    <Grid2 container spacing={2}>
      {device.devices.map((deviceItem) => (
        <Grid2 item key={deviceItem.id} xs={12} sm={6} md={4}>
          {" "}
          <DeviceItem device={deviceItem} />{" "}
        </Grid2>
      ))}
    </Grid2>
  );
};

export default DeviceList;
