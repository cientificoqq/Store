import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { Context } from "..";

const Auth = ({ open, onClose }) => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      localStorage.setItem("token", data.token);
      user.setIsAuth(true);
      onClose();
      navigate(SHOP_ROUTE);
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка авторизации");
    }
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

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {isLogin ? (
            <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
          ) : (
            <NavLink to={LOGIN_ROUTE}>Authentication</NavLink>
          )}
          <Button type="submit" variant="contained" color="primary">
            {isLogin ? "Log in" : "Sign up"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Auth;
