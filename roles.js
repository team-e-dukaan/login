import { StyleSheet, View, Text,Button,TouchableOpacity, FlatList  } from 'react-native';

import {globalStyles} from '../styles/global';
import React,{useState} from 'react'; 
import Card from '../shared/card';
import Details from '../principal/Details'
export default function SampleNav({navigation}) {
    const [menu, setMenu] = useState([
        { title: 'Add student',  key: '1' },
        { title: 'Add Staff', key: '2' },
        { title: 'Money', key: '3' },
      ]);
    
    const pressHandler = () => {
        navigation.goBack();
      }
    
  return (
    <View style={globalStyles.container}>
    <FlatList data={menu} renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </Card>
      </TouchableOpacity>
    )} />
    <View style={styles.bott}>
      <Button title='sample nav'
      onPress={() => navigation.navigate('Details')} />
      </View>
  </View>

    // <View style={globalStyles.container}>
    //   <Text>Principal Screen</Text>
    //   {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    // </View>
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