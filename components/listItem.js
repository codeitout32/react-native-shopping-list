import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={style.listItem}>
      <View style={style.listItemView}>
        <Text style={style.listItemText}>{item.title}</Text>
        <Icon
          name="remove"
          size={20}
          color="#D9534F"
          onPress={(e) => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    height: 60,
    padding: 15,
    backgroundColor: '#FFEEAD',
    borderBottomWidth: 1,
    borderColor: '#D9534F',
  },
  listItemText: {
    color: '#000',
    fontSize: 18,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ListItem;
