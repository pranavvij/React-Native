
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View, Text, TextInput } from 'react-native';

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

// export default class FixedDimensionsBasics extends Component {
//     render(){
//       return(<View style={{flex:1, flexDirection: 'row'}}>
//                 <View style={{flex:1, backgroundColor: 'powderblue'}}/>
//                 <View style={{flex:2, backgroundColor: 'skyblue'}}/>
//                 <View style={{flex:3, backgroundColor: 'steelblue'}}/>
//               </View>);
//     }
// }

export default class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render(){
    return (
        <View style={{padding: 10}}>
            <TextInput style={{height: 40}}
            placeholder="Type here to translate!!"
            onChangeText={(text) => this.setState({text})}/>
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
      )
  }
}


AppRegistry.registerComponent('ReactTutorial', () => PizzaTranslator);
