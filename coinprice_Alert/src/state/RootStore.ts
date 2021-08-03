import { CoinListStore } from "./CoinList";
import { TabStore } from "./Tab";

export class RootStore{
    coinListStore : CoinListStore;
    TabStore    : TabStore;

    constructor(){
        this.coinListStore  = new CoinListStore(this);
        this.TabStore       = new TabStore(this);
    }

}