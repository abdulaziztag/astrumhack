import React from 'react'
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';

export const OverlayLoader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
      <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    height:'100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center'
  }
})
