
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View,FlatList, Text, TextInput, Button,Alert,ScrollView } from 'react-native';

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

// export default class PizzaTranslator extends Component{
//   constructor(props){
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render(){
//     return (
//         <View style={{padding: 10}}>
//             <TextInput style={{height: 40}}
//             placeholder="Type here to translate!!"
//             onChangeText={(text) => this.setState({text})}/>
//             <Text style={{padding: 10, fontSize: 42}}>
//                 {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//             </Text>
//         </View>
//       )
//   }
// }


// export default class ButtonPressComponent extends Component{
//   render(){
//     return (
//         <Button title="Press Me" onPress={() => {Alert.alert('You tapped the button!');}}/>
//       );
//   }
// }

// export default class ButtonBasics extends Component {
//   _onPressButton(){
//     Alert.alert('You tapped the button!');
//   }
//
//   render(){
//     return (
//       <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <Button
//           onPress={this._onPressButton}
//           title="Press Me"
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           onPress={this._onPressButton}
//           title="Press Me"
//           color="#841584"
//         />
//       </View>
//       <View style={styles.alternativeLayoutButtonContainer}>
//         <Button
//           onPress={this._onPressButton}
//           title="This looks great!"
//         />
//         <Button
//           onPress={this._onPressButton}
//           title="OK!"
//           color="#841584"
//         />
//       </View>
//     </View>
//       );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    backgroundColor: '#000000',
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });


// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }


export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
AppRegistry.registerComponent('ReactTutorial', () => FlatListBasics);
