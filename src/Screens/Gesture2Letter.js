import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Camera } from 'expo-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {OverlayLoader} from '../Components/OverlayLoader';

export const Gesture2Letter = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isActive, setIsActive] = useState(false)
  const [loader, setLoader] = useState(false)

  const changeRecordBtn = () => {
    if (isActive) {
      setLoader(true)
      setTimeout(() => {

        Alert.alert('Good luck')
        setLoader(false)
      }, 3000)
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.squad}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialCommunityIcons style={styles.flipIcon} name="camera-party-mode" size={50}/>
          </TouchableOpacity>
          <View style={styles.recordBtnContainer}>
            <TouchableOpacity
              style={isActive ? styles.recordBtnActive : styles.recordBtn}
              onPress={changeRecordBtn}
            >
              {isActive && <MaterialCommunityIcons  name="stop" size={54} color={'rgba(255,255,255, .8)'}/>}
            </TouchableOpacity>
          </View>
          <View
            style={{flex: .5,
            justifyContent: 'center'}}>
          </View>
        </View>
      </Camera>
      {loader &&
        <OverlayLoader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  squad: {
    height: 350,
    width: 250,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    marginBottom: '25%'
  },
  buttonContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width:'100%',
    height: '15%',
  },
  button: {
    flex: .5,
    justifyContent: 'flex-end',
  },
  flipIcon: {
    fontSize: 46,
    color: 'white',
    marginLeft: 20,
    marginBottom: 10
  },
  recordBtnContainer: {
    flex: .5,
    justifyContent: 'center',
  },
  recordBtn: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255, .7)',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'rgba(255,255,255, .8)'
  },
  recordBtnActive: {
    height: 70,
    width: 70,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,10,10, 1)',
    borderRadius: 100,
    borderWidth: 7,
    borderColor: 'rgba(255,255,255, .8)'
  },
});
