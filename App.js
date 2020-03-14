import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import IconAnd from 'react-native-vector-icons/AntDesign';

export default class App extends Component {

  render() {
    const Stack = createStackNavigator();
    const BottomTab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();
    const Top = createMaterialTopTabNavigator();
    return (
      <>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'Trang Chu', headerShow:false}} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
          </Stack.Navigator> */}
          {/* <BottomTab.Navigator>
            <BottomTab.Screen name="home" component={Home}
              options={{
                title: 'Trang Chu', headerShow: false, tabBarIcon: ({ forcused, color, size }) => {
                  if (forcused) {
                    return <IconAnd stye={{ color: 'red' }} name='star' size={size}/>
                  }
                return <IconAnd name='home' size={size} />
              } }} />
            <BottomTab.Screen name="login" component={Login} />
            <BottomTab.Screen name="register" component={Register} />
          </BottomTab.Navigator> */}
          {/* <Drawer.Navigator>
            <Drawer.Screen name="home" component={Home}
              options={{
                title: 'Trang Chu', headerShow: false, drawerIcon: ({ forcused, color, size }) =>
                {
                  if (forcused) {
                    return <IconAnd stye={{ color: 'red' }} name='star' size={size} />
                  }
                  return <IconAnd name='home' size={size} />
                }
              }} />
            <Drawer.Screen name="login" component={Login} />
            <Drawer.Screen name="register" component={Register} />
          </Drawer.Navigator> */}
          <Top.Navigator>
            <Top.Screen initialParams={{email:'default'}} name="home" component={Home}
              options={{
                title: 'Trang Chu', headerShow: false, drawerIcon: ({ forcused, color, size }) => {
                  if (forcused) {
                    return <IconAnd stye={{ color: 'red' }} name='star' size={size} />
                  }
                  return <IconAnd name='home' size={size} />
                }
              }} />
            <Top.Screen name="login" component={Login} />
            <Top.Screen name="register" component={Register} />
          </Top.Navigator>
        </NavigationContainer>
      </>
    )
  }
}