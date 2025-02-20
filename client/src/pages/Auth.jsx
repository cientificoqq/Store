import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = ({ open, onClose }) => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name, "Email:", email);
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          {isLogin ? "Authentication" : "Registration"}
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {isLogin ? (
            <div>
              <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            </div>
          ) : (
            <div>
              <NavLink to={LOGIN_ROUTE}>Authentication</NavLink>
            </div>
          )}
          <Button type="submit" variant="contained" color="primary">
            {isLogin ? "Log in" : "Registration"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Auth;
