import Decoder, * as _ from "jsonous";
// import { Upbit } from "./upbit";
import { Coin, Currency, Ticker } from "../common/types";
import { Upbit } from "./upbitrequest";

/**
 * Get Coins List
 */

const upbit_api = new  Upbit({
    access_key: '',
    secret_key: ''
  })

export const tickerRequest = (
  ): Promise<any[]> => (
    upbit_api.GetMarketCodes()
  );
    
export const priceRequest = async (): 
    Promise<Coin[]> => {
    let ticker = await tickerRequest();
    ticker = ticker.map( _ => _.market ).filter( x => x.includes('KRW'));
    let price = await upbit_api.GetTickers(ticker);
    let coinprice : Coin[] = [] 
    let id = 1;
    price.forEach ( _ => coinprice.push({
      'id': _.market.replace('KRW-', ''),
      'symbol': _.market.replace('KRW-', ''),
      'name': _.market,
      'price': _.trade_price,
      'priceChange': _.signed_change_rate*100,
      })
    );
    console.log('coinprice', coinprice);
    return coinprice
  };

