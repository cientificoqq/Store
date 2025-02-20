import {
  Card,
  CardActionArea,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Grid2 container spacing={2}>
      {device.brands.map((brand) => (
        <Grid2 item key={brand.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              border:
                brand.id === device.selectedBrand?.id
                  ? "2px solid #1976d2"
                  : "none",
              boxShadow: brand.id === device.selectedBrand?.id ? 6 : 2,
              "&:hover": { boxShadow: 6 },
            }}
          >
            <CardActionArea onClick={() => device.setSelectedBrand(brand)}>
              <CardContent>
                <Typography variant="h6" align="center">
                  {brand.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
});

export default BrandBar;
