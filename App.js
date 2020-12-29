import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
 
  render() {
    return <Button 
    color={this.props.color}
    title={this.props.title}
    onPress={this.props.onPress}
     />;
  }
}

export default class App extends Component {
  
  render() {
    
    return (
      <View style={{ marginTop: 100 ,textAlign:"center"}}>
    
      <Text style={{marginBottom:20 , fontSize:24 ,height:100,marginLeft:70}}>Choose Your Favourite Song Number ......</Text>
      <View style={{ marginBottom: 50 , width:200, height:50, marginLeft: 70 }}>
        <AnyColorButton
        color="purple"
        title="Song - 1"
        onPress={()=>alert("Play Song - 1")}
         />
        </View>
         <View style={{ marginBottom: 50 , width:200, height:50, marginLeft:70 }}>
        <AnyColorButton
        color="red"
        title="Song - 2"
        onPress={()=>alert("Play Song - 2")}
         />
        </View>
         <View style={{ marginBottom: 50 , width:200, height:50, marginLeft:70 }}>
        <AnyColorButton
        color="blue"
        title="Song - 3"
        onPress={()=>alert("Play Song - 3")}
         />
        </View>
         <View style={{ marginBottom: 50 , width:200, height:50, marginLeft:70 }}>
        <AnyColorButton
        color="green"
        title="Song - 4"
        onPress={()=>alert("Play Song - 4")}
         />
        </View>
         <View style={{ marginBottom: 50 , width:200, height:50, marginLeft:70 }}>
        <AnyColorButton
        color="cyan"
        title="Song - 5"
        onPress={()=>alert("Play Song - 5")}
         />
        </View>
      </View>
    );
  }
}