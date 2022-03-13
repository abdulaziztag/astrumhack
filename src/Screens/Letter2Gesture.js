import React, {useState} from 'react'
import {Text, View, TextInput, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TranslatedGestures} from '../Components/TranslatedGestures';

export const Letter2Gesture = () => {
  const [text, setText] = useState('')
  const [translateText, setTranslateText] = useState('')
  const translate = () => {
    setTranslateText(text)
    Keyboard.dismiss()
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Word to Gesture</Text>
      </View>
      <View
        style={styles.tField}
      >
        <TextInput
          editable
          multiline
          style={{height: '100%', fontSize: 18}}
          placeholder={'Type text to translate'}
          autoCapitalize={'sentences'}
          value={text}
          onChangeText={setText}
        />
      </View>
      <TouchableOpacity onPress={translate} style={styles.translateButton}>
        <Text style={{fontSize: 26}}>Translate</Text>
        <MaterialCommunityIcons name="swap-horizontal" size={18}/>
      </TouchableOpacity>
      <TranslatedGestures text={translateText.split(' ').join('').split('')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  tField: {
    flex: .2,
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    paddingLeft: 10,
  },
  header: {
    flex: .12,
    backgroundColor: '#FF6F00',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8
  },
  headerText: {
    marginBottom: 12,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  img: {
    height: 100,
    width: 100,
    margin: 8,
    borderWidth: 1,
    borderColor: 'red'
  },
  translateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'azure',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    flex: .05
  }
})
