import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import React from 'react';

export default function SampleNav({navigation}) {
    const pressHandler = () => {
        navigation.goBack();
      }
    
  return (
    <View style={globalStyles.container}>
      <Text>Details Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}
