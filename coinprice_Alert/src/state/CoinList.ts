
import { observer } from "mobx-react-lite";
import { createContext } from "react";

import { coinsRequest } from "../api/coinListing";
import { Coin, Currency } from "../common/types";

import { makeAutoObservable  } from "mobx";

export class CoinListStore {
  // 추후에 다른 store에서 변수를 가지고 올 수도 있음으로 rootstore를 임시로 만들어 둔다. 
  rootStore;

  list: Coin[] = [];
  error: string | null = null;
  showError: boolean = false;
  loading: boolean = false;

  constructor(root){
    this.rootStore = root;
    makeAutoObservable(this)
  }
  
  page: number = 0;
  perPage: number = 20;
  baseCurrency: Currency = "USD";

  getNextPage() {
    if (this.loading) return;
    this.page += 1;
    this.getData();
  }z

  refresh() {
    if (this.loading) return;
    this.page = 0;
    this.list = [];
    this.getData();
  }

  getData() {
    if (this.loading) return;

    this.loading = true;

    coinsRequest(this.page, this.perPage, this.baseCurrency)
      .then(list => {
        this.list = this.list.concat(list);
        this.loading = false;
        this.page += 1;
      })
      .catch(e => {
        this.loading = false;
        this.error = e.message;
        this.showError = true;
      });
  }

  closeError() {
    this.showError = false;
  }
}

