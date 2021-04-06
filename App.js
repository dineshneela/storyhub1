
import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,SafeAreaView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Header } from 'react-native-elements';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
export default class App extends React.Component {
  constructor(){
    super();
     this.state={
       storytitle:"",
       author:"",
       writeyourstory:""
     }
       
  }
  render(){
  return (
    <View>
       
      <AppContainer/>
      
      </View>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},                
  Read: {screen: ReadStoryScreen},
})

 
   
  


 const AppContainer =  createAppContainer(TabNavigator) 
 const styles=StyleSheet.create({
  container:{}
 })