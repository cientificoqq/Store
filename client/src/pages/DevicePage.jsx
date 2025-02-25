import React, { useState } from "react";
import { Container, Typography, Rating, Grid2, Button } from "@mui/material";

const DevicePage = () => {
  const [rating, setRating] = useState(4.5);

  const device = {
    id: 1,
    name: "iPhone 12 Pro",
    price: 25000,
    img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
  };
  const description = [
    { id: 1, title: "Оперативна пам`ять", description: "5гб" },
    { id: 2, title: "Камера", description: "12МП" },
    { id: 3, title: "Процесор", description: "Пентіум 3" },
    { id: 4, title: "Кількусть ядер", description: "2" },
    { id: 5, title: "Акумулятор", description: "4000" },
  ];
  return (
    <Container
      sx={{
        margin: "20px auto",
      }}
    >
      <Grid2
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 xs={12} sm={6}>
          <img
            src={device.img}
            alt={device.name}
            width="300px"
            height="300px"
          />
          <Grid2 xs={12} sm={6}>
            <Typography variant="h5">{device.name}</Typography>
          </Grid2>
        </Grid2>

        <Grid2
          xs={12}
          sx={{
            width: "200px",
            height: "200px",
            border: "1px solid grey",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Typography variant="h6">Цена: {device.price} грн</Typography>

          <Rating
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => setRating(newValue)}
          />
          <Typography variant="body2">Ваш рейтинг: {rating}</Typography>
          <Button variant="contained" color="primary">
            Додати в корзину
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 sx={{ marginTop: "15px" }}>
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Typography
            key={info.id}
            variant="h6"
            sx={{ backgroundColor: index % 2 === 0 ? "lightgrey" : "white" }}
          >
            {info.title}: {info.description}
          </Typography>
        ))}
      </Grid2>
    </Container>
  );
};

export default DevicePage;
