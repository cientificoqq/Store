import {
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Grid2,
} from "@mui/material";
import React, { useState } from "react";
import { Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DeviceItem = ({ device }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/device/${device.id}`);
  };

  return (
    <Grid2 container spacing={2} sx={{ marginTop: "30px" }}>
      <Grid2 item xs={12} sm={6} md={4}>
        <Card onClick={handleCardClick} sx={{ cursor: "pointer" }}>
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
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavoriteClick();
                }}
              >
                {isFavorite ? <Star /> : <StarBorder />}
              </IconButton>
              <div>{device.rating}</div>
            </div>
            <Typography>Ціна: {device.price}</Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default DeviceItem;
