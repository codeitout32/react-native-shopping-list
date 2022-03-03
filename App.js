import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {v4 as uuid} from 'uuid';

import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';

const App = () => {
  const [list, setList] = React.useState([
    {id: uuid(), title: 'Milk'},
    {id: uuid(), title: 'Eggs'},
    {id: uuid(), title: 'Bread'},
    {id: uuid(), title: 'Juice'},
  ]);

  const addItem = textValue => {
    if (!textValue) return;
    return setList([{id: uuid(), title: textValue}, ...list]);
  };

  const deleteItem = id => {
    setList(list => {
      return list.filter(x => x.id != id);
    });
  };
  return (
    <View style={style.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
