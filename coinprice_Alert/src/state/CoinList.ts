import { action, observable } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext } from "react";

import { coinsRequest } from "../api/coinListing";
import { Coin, Currency } from "../common/types";


class CoinListStore {
  @observable 
  list: Coin[] = [];
  @observable 
  error: string | null = null;
  @observable 
  showError: boolean = false;
  @observable 
  loading: boolean = false;

  page: number = 0;
  perPage: number = 20;
  baseCurrency: Currency = "USD";

  @action 
  getNextPage() {
    if (this.loading) return;
    this.page += 1;
    this.getData();
  }

  @action 
  refresh() {
    if (this.loading) return;
    this.page = 0;
    this.list = [];
    this.getData();
  }

  @action 
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

export const CoinListStoreContext = createContext(new CoinListStore());