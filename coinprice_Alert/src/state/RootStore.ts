import { CoinListStore } from "./CoinList";

export class RootStore{
    coinListStore : CoinListStore;

    constructor(){
        this.coinListStore = new CoinListStore(this);
    }

}