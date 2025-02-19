import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Samsung",
        price: 25000,
        rating: 5,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saturn.de%2Fde%2Fproduct%2F_apple-iphone-12-5g-2694646.html&psig=AOvVaw1uvEXu0oA5u4m1OIpOPe91&ust=1740083754141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi4haLL0IsDFQAAAAAdAAAAABAE",
      },
      {
        id: 2,
        name: "Samsung",
        price: 25000,
        rating: 5,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saturn.de%2Fde%2Fproduct%2F_apple-iphone-12-5g-2694646.html&psig=AOvVaw1uvEXu0oA5u4m1OIpOPe91&ust=1740083754141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi4haLL0IsDFQAAAAAdAAAAABAE",
      },
      {
        id: 3,
        name: "Samsung",
        price: 25000,
        rating: 5,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saturn.de%2Fde%2Fproduct%2F_apple-iphone-12-5g-2694646.html&psig=AOvVaw1uvEXu0oA5u4m1OIpOPe91&ust=1740083754141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi4haLL0IsDFQAAAAAdAAAAABAE",
      },
      {
        id: 4,
        name: "Samsung",
        price: 25000,
        rating: 5,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saturn.de%2Fde%2Fproduct%2F_apple-iphone-12-5g-2694646.html&psig=AOvVaw1uvEXu0oA5u4m1OIpOPe91&ust=1740083754141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi4haLL0IsDFQAAAAAdAAAAABAE",
      },
      {
        id: 5,
        name: "Samsung",
        price: 25000,
        rating: 5,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saturn.de%2Fde%2Fproduct%2F_apple-iphone-12-5g-2694646.html&psig=AOvVaw1uvEXu0oA5u4m1OIpOPe91&ust=1740083754141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi4haLL0IsDFQAAAAAdAAAAABAE",
      },
    ];

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

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
