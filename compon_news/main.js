import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './form';

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate('FullInfo');
  };

  const [news, setNews] = useState([
    {name: 'Название статьи', anons: 'В этой статье мы покажем вам...', full: 'Full text!', key: '1', img: 'https:\/\/scontent-waw1-1.cdninstagram.com\/v\/t51.29350-15\/272732178_995589594367890_3195562750867279775_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=oQpnXR4mpMEAX8nvOh4&_nc_ht=scontent-waw1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_cxQL6qwI6vcKfwrAYy3wH-Du_Z2MPmW33QOWvHG2fvw&oe=61FBA49C'},
    {name: 'Title2', anons: 'Text2!!', full: 'Full text2!', key: '2', img: 'https:\/\/scontent-waw1-1.cdninstagram.com\/v\/t51.29350-15\/272732178_995589594367890_3195562750867279775_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=oQpnXR4mpMEAX8nvOh4&_nc_ht=scontent-waw1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_cxQL6qwI6vcKfwrAYy3wH-Du_Z2MPmW33QOWvHG2fvw&oe=61FBA49C'},
    {name: 'Title3', anons: 'Text3!!', full: 'Full text3!', key: '3', img: 'https:\/\/scontent-waw1-1.cdninstagram.com\/v\/t51.29350-15\/272732178_995589594367890_3195562750867279775_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=oQpnXR4mpMEAX8nvOh4&_nc_ht=scontent-waw1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_cxQL6qwI6vcKfwrAYy3wH-Du_Z2MPmW33QOWvHG2fvw&oe=61FBA49C'},
  ]);

const [modalWindow, setModal] = useState(false); 

const addArticle = (article) => {
  setNews((list)=>{
    article.key = Math.random().toString();
    return [
      article,
      ...list
    ]
  });
  setModal(false);
};

return (
  <View style={gStyle.main}>
    <Modal visible={modalWindow}>
      
      <View style={gStyle.main}>
        <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModal(false)}/>
        <Text style={styles.title}>Форма добавления записи</Text>
        <Form addArticle={addArticle}/>
      </View>
    </Modal>
    <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModal(true)}/>
    <Text style={gStyle.title}>Главная страница</Text>
    {/* <Button title='Открыть' onPress={loadScene}/> */}
    <FlatList data={news} renderItem={({item})=> (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
        <Image 
          source={{
            uri: item.img
          }}
          style={styles.img}
        />

        <Text style={styles.title}>{ item.name }</Text> 
        <Text style={styles.anons}>{ item.anons }</Text>  
      </TouchableOpacity>
    )} />
  </View>
);
}


const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'  
  },
  img: {
    width: '100%',
    height: 200,
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  iconClose: {
    textAlign: 'right',
  },
  
});

