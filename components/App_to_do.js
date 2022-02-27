import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';

import Header from './components/header.js';
import ListItem from './components/listItem.js';
import Form from './components/form.js';


export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить хлеб', key: '2'},
    {text: 'Купить картошку', key: '3'},
    {text: 'Купить сыр', key: '4'},
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  };


  return (
      <SafeAreaView style={styles.mainBlock}>
        <Header />
        <Form addHandler={addHandler}/>
        <View>
          <FlatList data={listOfItems} renderItem={({item}) =>( 
            <ListItem el={item} deleteHandler={deleteHandler} />
           ) }/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {

  },
});
