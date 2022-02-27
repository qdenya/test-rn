import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';


export default function Contacts({ navigation, route }) {

  const loadScene = () => {
    navigation.goBack();
  };

return (
  <View style={gStyle.main}>
    <Image 
          source={{
            uri: route.params.img
          }}
          style={
            styles.img
          }
        />
    <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
    <Text style={styles.full}>{route.params.full}</Text>
    <Button title='Назад' onPress={loadScene}/>
  </View>
);
  
}


const styles = StyleSheet.create({
  full: {
    fontSize: 20,
    color: "#333",
    fontFamily: 'mt-light',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  header: {
    fontSize: 25,
    marginTop: 25
  },
  img:{
    width: '100%',
    height: 200,
  }
});

