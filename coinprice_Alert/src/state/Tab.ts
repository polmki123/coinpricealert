import { makeAutoObservable  } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext } from "react";

import {  Routes } from "../common/types";


export class TabStore {
  // 추후에 다른 store에서 변수를 가지고 올 수도 있음으로 rootstore를 임시로 만들어 둔다. 
  rootStore;

  routes : Routes[] = [
        { key: 'coinlists', title: 'CoinList', icon: 'md-heart' },
        // { key: 'favorites', title: 'Favorites', icon: 'md-heart' },
        { key: 'search', title: 'Search', icon: 'md-search' }
        // { key: 'sectors', title: 'Sectors', icon: 'md-business' },
        // { key: 'gainers', title: 'Gainers', icon: 'md-trending-up' },
        // { key: 'losers', title: 'Losers', icon: 'md-trending-down' },
        // { key: 'mostActive', title: 'Most Active', icon: 'md-flame' },
    ] 
  index: number = 0; 
  previousIndex: number = 0;

  constructor(root){
    this.rootStore = root;
    makeAutoObservable(this)
  }
  
  set_Tab( number : number ){
    this.previousIndex = this.index
    this.index = number 
  }
  
}

