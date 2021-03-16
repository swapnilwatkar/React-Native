import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableHighlight,ScrollView,Image } from 'react-native';
 

  
export default class Updates extends Component {

 
 constructor(props) {
      super(props);

  }

  render() {
    return(
      <View style={styles.myviewStyle}>
         <Image source={ require('../assets/image/updates.jpg')} style={{width: 450, height: 480}}  />
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

state = {displayUpdates:'Corona Live Updates!\n'}
 
componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({displayUpdates: this.state.displayUpdates+"Corona updates for India .. \n" })
  }, 2000);
  
}
componentWillUnmount() {
  clearInterval(this.interval);
}
render() {
    return(
       <ScrollView style = {styles.scrollViewStyle}>
         <Text style = {styles.textStyle}>{this.state.displayUpdates}</Text>           
       </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  myviewStyle: {
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

//export default Updates;
//AppRegistry.registerComponent('TRYAPP', () => Updates)