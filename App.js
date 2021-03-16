import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
 

import Information from './Startupscreen/Information';
import Welcome from './Startupscreen/Welcome';
import Updates from './Components/Updates';
import Facts from './Components/Facts';
import Vaccine from './Components/Vaccine';
import Checkin from './Components/Checkin';
 

export default class App extends React.Component {
  render() {
    
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Welcome
  },
  About: {
    screen: Information
  },
  Updates: {
    screen: Updates
  }
  ,
  Facts: {
    screen: Facts
  }
  ,
  Vaccine: {
    screen: Vaccine
  },
  Checkin: {
    screen: Checkin
  } 
});

const AppContainer = createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


  