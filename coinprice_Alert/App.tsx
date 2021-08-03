/**
 * Develop simple React Native applications that uses this API:
 * https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest
 * to gather the information about the cryptocurrencies and
 * present these infromation in the user-appealing way.
 *
 * Application can be very simple (one screen) although the technical choices (ie using redux, unit testing, and more) made and the code itself
 * should be enterprise-grade to demonstrate your professional development skills.
 */
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import CoinList from "./src/components/CoinList";
import Tab from "./src/components/Tab";
import { StoreProvider } from "./src/state/Context";
import { RootStore } from "./src/state/RootStore";
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#c1c1c1"
  }
});

const rootStore = new RootStore();

const App = () => {
  return (
    <StoreProvider value={rootStore}>
      <SafeAreaView style={style.safeArea}>
        <Tab />
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
