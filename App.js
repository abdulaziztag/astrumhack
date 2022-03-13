import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Gesture2Letter } from './src/Screens/Gesture2Letter';
import { Letter2Gesture } from './src/Screens/Letter2Gesture'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'}/>
      <Tab.Navigator shifting={true} barStyle={{backgroundColor: 'red'}}>
        <Tab.Screen name="Gesture2Letter" component={Gesture2Letter} options={{
          tabBarLabel: '',
          tabBarColor: '#43A047',
          tabBarIcon: ({ color }) => (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons name="gesture-two-tap" color={color} size={26} />
              <MaterialCommunityIcons name="chevron-right" color={color} size={26} />
              <MaterialCommunityIcons name="format-letter-case" color={color} size={26} />
            </View>
          ),
        }} style={{borderWidth: 1}} />
        <Tab.Screen name="Letter2Gesture" component={Letter2Gesture} options={{
          tabBarLabel: '',
          tabBarColor: '#FF6F00',
          tabBarIcon: ({ color }) => (
            <View style={{flexDirection: 'row', }}>
              <MaterialCommunityIcons name="format-letter-case" color={color} size={26} />
              <MaterialCommunityIcons name="chevron-right" color={color} size={26} />
              <MaterialCommunityIcons name="gesture-two-tap" color={color} size={26} />
            </View>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
