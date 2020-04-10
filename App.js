import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

const randstr = () => {
    return Math.random().toString(36).replace('0.','');
}

const App = () => {

  const [ items, setItem ] = useState([
    {id: randstr(), text: 'Milk' },
    {id: randstr(), text: 'Donnut'},
    {id: randstr(), text: 'Bread'},
    {id: randstr(), text: 'Spoon'},
  ]);

  const deleteItem = (id) => {
    setItem(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }


  return (
    <View style={style.container}>
      <Header />
      <AddItem setItem={setItem} uid={randstr}/>
      <FlatList 
        data={items} 
        renderItem={ ({item}) => (<ItemList item={item} deleteItem={deleteItem} />) } 
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },
});



export default App;