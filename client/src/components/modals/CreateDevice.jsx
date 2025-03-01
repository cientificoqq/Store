import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Context } from "../..";

const CreateDevice = ({ open, onClose }) => {
  const { device } = useContext(Context);
  const [deviceData, setDeviceData] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
    type: "",
    brand: "",
  });

  // Обработчик изменения значения в полях ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = () => {
    console.log("Новый девайс:", deviceData);
    onClose();
    setDeviceData({
      name: "",
      price: "",
      description: "",
      img: "",
      type: "",
      brand: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Создание нового девайса</DialogTitle>
      <DialogContent>
  
        <FormControl fullWidth margin="dense">
          <InputLabel>Выберите тип</InputLabel>
          <Select
            label="Выберите тип"
            value={deviceData.type}
            name="type"
            onChange={handleChange}
          >
            {Array.isArray(device.types) &&
              device.types.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="dense">
          <InputLabel>Выберите бренд</InputLabel>
          <Select
            label="Выберите бренд"
            value={deviceData.brand}
            name="brand"
            onChange={handleChange}
          >
            {Array.isArray(device.brands) &&
              device.brands.map((brand) => (
                <MenuItem key={brand.id} value={brand.id}>
                  {brand.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

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
