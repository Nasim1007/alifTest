import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export class Store {
  constructor() {
    this._posts = [];
    makeAutoObservable(this);
  }
  setPosts(posts) {
    this._posts = posts;
  }
  get posts() {
    return this._posts;
  }
}
export const AppContext = createContext({});
