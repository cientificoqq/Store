import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
  const [openType, setOpenType] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openDevice, setOpenDevice] = useState(false);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Button
        sx={{ width: "300px" }}
        variant="contained"
        color="primary"
        onClick={() => setOpenType(true)}
      >
        Добавить тип
      </Button>
      <CreateType open={openType} onClose={() => setOpenType(false)} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenBrand(true)}
        sx={{ mt: 2, width: "300px" }}
      >
        Добавить бренд
      </Button>
      <CreateBrand open={openBrand} onClose={() => setOpenBrand(false)} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenDevice(true)}
        sx={{ mt: 2, width: "300px" }}
      >
        Добавить устройство
      </Button>
      <CreateDevice open={openDevice} onClose={() => setOpenDevice(false)} />
    </Container>
  );
};

export default Admin;
