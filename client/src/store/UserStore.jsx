import { mekeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    mekeAutoObservable(this);
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
}
