import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableHighlight,ScrollView,Image} from "react-native";

export default class Facts extends Component {
    constructor(props) {
        super(props);
  
    }
    
    render() {
      return(
        <View style={styles.mainviewStyle}>
           <Image source={ require('../assets/image/facts.jpg')} style={{width: 400, height: 450}}  />
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
            onPress={() => this.props.navigation.navigate('Alert')}>
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
  state = {displayFacts:'\n Facts and Myths !\n'}
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({displayFacts: this.state.displayFacts+
          " This will display facts and myths of vaccine! " })      
      }, 1000);
      
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  render() {
      return(
        <ScrollView style = {styles.scrollViewStyle}>
            <View>
              <Text style={styles.textStyle}> {this.state.displayFacts}</Text>
            </View>
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
  