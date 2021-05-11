import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignupLogin from './screens/SignupLoginScreen';
import DonorScreen from './screens/DonorScreen';
import VolunteerScreen from './screens/VolunteerScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
//import {AppTabNavigator} from './Components/AppTabNavigator';




export default class App extends React.Component {
  render(){
  return (
    
     
      <AppContainer/>

  );
}
}
const TabNavigator = createBottomTabNavigator({
  Donate:{screen:DonorScreen},
  Volunteer:{screen:VolunteerScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName=="Donate"){
        return(<Image source={require("./assets/donate.png")} style={{width:40,height:40}}></Image>)
      }
      else if(routeName=="Volunteer"){
        return(<Image source={require("./assets/volunteer.png")} style={{width:40,height:40}}></Image>)
      }
    }
  })
})
const SwitchNavigator = createSwitchNavigator({SignupLogin:{screen:SignupLogin},Donate:{screen:TabNavigator}})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
