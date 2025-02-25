import React, { useState } from "react";
import {
  Container,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const CreateType = ({ open, onClose }) => {
  const [newType, setNewType] = useState("");

  const handleChange = (event) => {
    setNewType(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Тип создан:", newType);
    onClose();
    setNewType("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Создание нового типа</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Название типа"
          fullWidth
          variant="outlined"
          value={newType}
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
export default CreateType;
