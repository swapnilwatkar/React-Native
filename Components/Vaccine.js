import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableHighlight,ScrollView,Image} from "react-native";

export default class Vaccine extends Component {
    constructor(props) {
        super(props);
  
    }
  
    render() {
      return(
        <View style={styles.mainviewStyle}>
           <Image source={ require('../assets/image/vaccine.jpg')} style={{width: 450, height: 450}}  />
          <ContainerView/>
            <View style={styles.footer}>
            <TouchableHighlight style={styles.bottomButtons} 
             onPress={() => this.props.navigation.navigate('Updates')}>
                <Text style={styles.footerText}>Updates</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bottomButtons} 
            onPress={() => this.props.navigation.navigate('Checkin')}>
                <Text style={styles.footerText}>Checkin</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bottomButtons}
            onPress={() => this.props.navigation.navigate('Facts')}>
                <Text style={styles.footerText}>Facts</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bottomButtons}
            onPress={() => this.props.navigation.navigate('Vaccine')}>
                <Text style={styles.footerText}>Vaccine</Text>
            </TouchableHighlight>
            </View>
        </View>
      );
    }
  }
  
  class ContainerView extends React.Component {
  constructor(props) {
        super(props);
  }
  state = {displayVaccination:'\n Vaccination Updates !\n'}
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({displayVaccination: this.state.displayVaccination+
        "In terms of states, the highest number of  doses have been administered in Rajasthan  at 23.3 lakh, followed by Gujarat (19.5 lakh),  Maharashtra (19.4 lakh), Uttar Pradesh (19.2 lakh),  and West Bengal (17.3 lakh).This second phase  of the vaccination drive commenced in India on March 2 with the aim of vaccinating nearly 10 crore individuals across the country. " })      
    }, 1000);
    
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
      return(
        <ScrollView style = {styles.scrollViewStyle}>
             
              <Text style={styles.textStyle}>{this.state.displayVaccination}</Text>
             
        </ScrollView>
      );
    }
  }
  
  var styles = StyleSheet.create({
    mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'white',
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerText: {
    color:'black',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize:18,
    fontWeight:'bold',
  },
  scrollViewStyle: {
    borderWidth: 2,
    borderColor: 'white'
  }
  });
  