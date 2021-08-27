import React, { Component } from 'react'
import { BackHandler, Dimensions, StyleSheet } from 'react-native'
import { Icon, View, Text } from 'native-base'
import { connect } from 'react-redux'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view'

import { NativeBaseProvider } from 'native-base';

import { Colors } from '../../constants'

import { useStores } from "../../state/Context";

import CoinList from '../CoinList'
import ErrorPopup from '../ErrorPopup'

import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';

const Tab = observer(() => {

  const { TabStore } = useStores();

  const CoinListTab = () => (
    <View style={styles.container}>
        <CoinList />
    </View>
  );

  const sceneMap = SceneMap({
    coinlists : CoinListTab,
  });

  const renderIcon = ({ route }) => <Icon name={route.icon} style={{ fontSize: 20, color: Colors.TEXT_DARK }} />

  const tabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      labelStyle={styles.labelStyle}
      pressColor={Colors.BLUE2}
      style={styles.tabBar}
      useNativeDriver={true}
      scrollEnabled={true}
      tabStyle={{ paddingHorizontal: 0, paddingVertical: 8, width: 84 }}
      renderIcon={ renderIcon }
    />
  )
  

  // onBackPress = () => {
  //   const { setTab, tabs } = this.props
  //   setTab(tabs.previousIndex)
  //   return true
  // }

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  // }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <TabView
          initialLayout={styles.initialLayout}
          navigationState={ {
                            index: TabStore.index,
                            routes: TabStore.routes 
                          } }
          onIndexChange={ index => TabStore.set_Tab(index)}
          renderScene={ sceneMap }
          renderTabBar={ props => tabBar(props) }
          tabBarPosition="bottom"
        />
      </View>
    </NativeBaseProvider>
  );

} )

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    initialLayout: {
      height: 0,
      width: Dimensions.get('window').width
    },
    indicatorStyle: {
      backgroundColor: Colors.TEXT_DARK,
      top: 0
    },
    labelStyle: {
      color: Colors.TEXT_NORMAL,
      fontSize: 10,
      height: 65,
      marginHorizontal: 0,
      marginBottom: 4,
      paddingVertical: 0
    },
    tabBar: {
      backgroundColor: Colors.BLUE1,
      borderTopColor: Colors.BLUE2,
      borderTopWidth: 1,
      elevation: 0,
      height: 65,
      paddingTop: 2
    }
  })


export default Tab;