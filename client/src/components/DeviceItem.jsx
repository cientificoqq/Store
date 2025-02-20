import {
  Card,
  CardContent,
  Grid2,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Star, StarBorder } from "@mui/icons-material";

const DeviceItem = ({ device }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Grid2 container spacing={2} sx={{ marginTop: "30px" }}>
      <Grid2 item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <img width={150} height={150} src={device.img} alt={device.name} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{device.name}</Typography>
              <IconButton onClick={handleFavoriteClick}>
                {isFavorite ? <Star /> : <StarBorder />}{" "}
              </IconButton>
              <div>{device.rating}</div>
            </div>

            <Typography>Цена: {device.price}</Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default DeviceItem;
