import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from "react-native"; 
import { SliderBox } from "react-native-image-slider-box";


const img1=require('../assets/image/1.jpg');
const img2=require('../assets/image/2.jpg');
const img3=require('../assets/image/3.jpg');
const img4=require('../assets/image/4.jpg');
export default class Information extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: [img1,img2,img3,img4]
    };
  }
  render() {
    return (
      <View style={styles.myviewStyle}>
        <ContainerView/>        
        <SliderBox  sliderBoxHeight={650}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 15,
            marginHorizontal: 10,
            padding: 0,
            margin: 0
          }}
         // autoplay
         // circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
          }}
         // ImageComponentStyle={{borderRadius: 5, width: '97%',height:'90%', marginTop: 5}}
        imageLoadingColor="#2196F3"
        />
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
const styles = StyleSheet.create({
  container: {
    flex: 1
      
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
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
  }
});
class ContainerView extends React.Component {
  constructor(props) {
        super(props);
  } 
  render() {return null;}
  }