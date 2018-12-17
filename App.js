
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View, Text } from 'react-native';

// const styles = StyleSheet.create({
//     bigblue: {
//       color: 'blue',
//       fontWeight: 'bold',
//       fontSize: 30
//     },
//     red: {
//       color: 'red'
//     }
// });
//
// export default class Bananas extends Component {
//   render(){
//     let pic = {
//         uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
//     }
//     return (<View>
//                 <Text style={styles.red}>Just Red</Text>
//                 <Text style={styles.bigblue}>Just Blue</Text>
//                 <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//                 <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//             </View>);
//   }
// }

export default class FixedDimensionsBasics extends Component {
    render(){
      return(<View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:1, backgroundColor: 'powderblue'}}/>
                <View style={{flex:2, backgroundColor: 'skyblue'}}/>
                <View style={{flex:3, backgroundColor: 'steelblue'}}/>
              </View>);
    }
}


AppRegistry.registerComponent('ReactTutorial', () => FixedDimensionsBasics);
