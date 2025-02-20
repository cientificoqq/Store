import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12 pro max",
        price: 25000,
        rating: 5,
        img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
      },
      {
        id: 2,
        name: "11 pro",
        price: 25000,
        rating: 5,
        img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
      },
      {
        id: 1,
        name: "12 pro max",
        price: 25000,
        rating: 5,
        img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
      },
      {
        id: 2,
        name: "11 pro",
        price: 25000,
        rating: 5,
        img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
      },
      {
        id: 1,
        name: "12 pro max",
        price: 25000,
        rating: 5,
        img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
      },
      {
        id: 2,
        name: "11 pro",
        price: 25000,
        rating: 5,
        img: "/img/1a8aff6e399487efb30623000071dd08.jpg",
      },
    ];
    this._selectedType = null;
    this._selectedBrand = null;

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
