import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const CreateDevice = ({ open, onClose }) => {
  const [deviceData, setDeviceData] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  // Обработка изменений в форме
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  // Обработка отправки формы
  const handleSubmit = () => {
    console.log("Новый девайс:", deviceData);
    onClose(); // Закрытие модального окна
    setDeviceData({ name: "", price: "", description: "", img: "" }); // Очистка формы
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Создание нового девайса</DialogTitle>
      <DialogContent>
        <TextField
          label="Название девайса"
          fullWidth
          variant="outlined"
          margin="dense"
          name="name"
          value={deviceData.name}
          onChange={handleChange}
        />
        <TextField
          label="Цена"
          fullWidth
          variant="outlined"
          margin="dense"
          name="price"
          type="number"
          value={deviceData.price}
          onChange={handleChange}
        />
        <TextField
          label="Описание"
          fullWidth
          variant="outlined"
          margin="dense"
          name="description"
          multiline
          rows={3}
          value={deviceData.description}
          onChange={handleChange}
        />
        <TextField
          label="Изображение URL"
          fullWidth
          variant="outlined"
          margin="dense"
          name="img"
          value={deviceData.img}
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

export default CreateDevice;
