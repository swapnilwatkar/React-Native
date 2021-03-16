import React, { Component } from 'react';
import { ImageBackground,Button, View, Text,StyleSheet,TouchableOpacity  } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
 
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={["#004d40", "#009688"]}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

// const Separator = () => (
//   <View style={styles.separator} />
// );
export default class Welcome extends Component {
  
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../assets/image/home.png')} style={styles.image}>
           
            </ImageBackground>
            <Text style={styles.text}>You must be 18 or older to use this app</Text>             
            <Text style={styles.text}>Press I Understand if you are 18+</Text>
            <Text> </Text>
            <AppButton title="I Understand!" size="sm" backgroundColor="#007bff" 
            onPress={() => this.props.navigation.navigate('About')}/>
             
            <Text> </Text> 
      </View>
    )
    
  }
  //<Button title="I Understand" onPress={() => this.props.navigation.navigate('About')}/>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
     
  },
  image: {
    flex: 1,
    //resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
     backgroundColor: "white"
  },
   
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  } 
});