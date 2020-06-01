import { StyleSheet, View, Text,TextInput, Button, } from 'react-native';
//import { globalStyles } from '../styles/global';
import {globalStyles} from '../styles/global';
import React, { useState }  from 'react';

export default function Home({navigation}) {
    const[text, setText] = useState('');
    const pressHandler = () => {
        //navigation.navigate('ReviewDetails');
        navigation.push('SampleNav');
      }
    

    const changeHandler = (val) => {
      setText(val);
      console.log(text);
    };
//   return (
//     <View style={globalStyles.container}>
//       <Text style={globalStyles.titleText}>Home Screen</Text>
//     </View>
//   );
//onClick={
 // http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/sendOTP?emailId=text
//}
return (
    <View style={globalStyles.container}>
      <TextInput 
        style={styles.input} 
        placeholder='Enter email'
        onChangeText={changeHandler} 
        value={text} 
      />
      
      <Button color='coral'  title='submit'  />
      <View style={styles.bott}>
      <Button title='sample nav'
      onPress={() => navigation.navigate('SampleNav', text)} />
      </View>
     
    </View>
  );
}


const styles = StyleSheet.create({
  bott:
    {
      //flexDirection:
      // flexDirection: 'column',
      // justifyContent:'space-between',
      position: 'absolute',
      bottom:0,
      left:0,
    },
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    
    contentContainer: {
      flex: 1 // pushes the footer to the end of the screen
  },
    footer: {
      height: 100
  }
  });