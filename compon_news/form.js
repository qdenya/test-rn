import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form( { addArticle } ) {



return (
    <View>
      <Formik initialValues={{name: '', anons: '', full: '', img: ''}}  onSubmit={(values, action) => {
        addArticle(values);
        action.resetForm();
      }}>
        {(props) => (
          <View>
            <TextInput 
            style={styles.input}
            value={props.values.name} 
            placeholder='Введите здесь название'
            onChangeText={props.handleChange('name')}
            multiline/>
            <TextInput 
            multiline style={styles.input}
            value={props.values.anons} 
            placeholder='Введите здесь анонс' 
            onChangeText={props.handleChange('anons')}
            />
            <TextInput 
            style={styles.input}
            value={props.values.full} 
            placeholder='Введите здесь основной текст' 
            onChangeText={props.handleChange('full')}
            multiline
            />
            <TextInput
            style={styles.input} 
            value={props.values.img} 
            placeholder='Введите здесь ссылку на фото' 
            onChangeText={props.handleChange('img')}/>
            <Button title='Add' onPress={props.handleSubmit}
            multiline/>
          </View>
        )}
      </Formik>
    </View>
);
  
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 5
  }
});

