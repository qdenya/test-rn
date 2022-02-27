import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableHighlight, View, Platform } from 'react-native';



export default function App() {

  const pressDen = () => console.log("test2");

  const Aled = () => alert('Hejka');

  const Aler = () =>Alert.alert("Hejka", "Message", [{text: "Tak", onPress: Dial}, 
  {text:"Nie", onPress: () => console.log('No')}
  ]);

const Dial = () =>Alert.prompt("Hejka", "Message", text => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Привет 1!</Text>
      <Text numberOfLines={2} style={styles.text}onPress={pressDen}>Привет 1! {'\n'}Привет 3!</Text>
      <Button title={'Press me 1'} color={'red'} onPress={Aler}/>

      <Button title={'Press me 2'} color={'red'} onPress={Dial}/>

      {/* <Image source={require('./assets/adaptive-icon.png')} /> */}
      <TouchableHighlight onPress={Dial}>
      <Image source={{
        height: 150,
        uri: "https://vivabraslav.by/wp-content/uploads/2020/12/logo_viva_vert_whie.png",
      }} />
      </TouchableHighlight>
      
      <View>
        <Text style={styles.box}>Привет 1!</Text>
      </View>

      <View style={styles.mainBlock}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    backgroundColor: 'red'
  },
  box: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: 'red',
  },
  box: {
    backgroundColor: "yellow",
    width: '50%',
    height: 150,
    opacity: 0.9,
    borderWidth: 5,
    borderColor: 'red',
    position: 'absolute',
    top: Platform.OS === "ios" ? 3 : 300,
  }
});
