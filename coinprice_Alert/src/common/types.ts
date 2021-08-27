export type Currency = "USD" | "BTC";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  price: number;
  priceChange: number;
}

export interface Ticker {
  market: string;
}

export interface FailedResponse {
  code: number;
  message: string;
}


export interface TodoData {
  id: number;
  content: string;
  checked: boolean;
}

interface Todo {
  todoData: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export interface Routes {
  key : string;
  title : string;
  icon : string 
}

// export interface Tabs {
//   index: number,
//   previousIndex: number,
//   routes: Routes[]; 
  // [
  //   { key: 'favorites', title: 'Favorites', icon: 'md-heart' },
  //   { key: 'search', title: 'Search', icon: 'md-search' },
  //   { key: 'sectors', title: 'Sectors', icon: 'md-business' },
  //   { key: 'gainers', title: 'Gainers', icon: 'md-trending-up' },
  //   { key: 'losers', title: 'Losers', icon: 'md-trending-down' },
  //   { key: 'mostActive', title: 'Most Active', icon: 'md-flame' },
  //   { key: 'crypto', title: 'Crypto', icon: 'logo-bitcoin' }
  //   { key: 'ipo', title: 'IPO', icon: "md-calendar" },
  //   { key: 'earnings', title: 'Earnings', icon: "logo-usd" }
  // ]
}