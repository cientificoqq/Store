import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const CreateBrand = ({ open, onClose }) => {
  const [brandData, setBrandData] = useState({
    name: "",
    description: "",
    logo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandData({ ...brandData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Новый бренд:", brandData);
    onClose();
    setBrandData({ name: "", description: "", logo: "" });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Создание нового бренда</DialogTitle>
      <DialogContent>
        <TextField
          label="Название бренда"
          fullWidth
          variant="outlined"
          margin="dense"
          name="name"
          value={brandData.name}
          onChange={handleChange}
        />
        <TextField
          label="Описание"
          fullWidth
          variant="outlined"
          margin="dense"
          name="description"
          value={brandData.description}
          onChange={handleChange}
        />
        <TextField
          label="Логотип URL"
          fullWidth
          variant="outlined"
          margin="dense"
          name="logo"
          value={brandData.logo}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Отмена
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateBrand;
