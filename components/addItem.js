import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = React.useState('');

  const handleInputChange = textValue => setText(textValue);

  return (
    <View style={style.header}>
      <TextInput
        placeholder="Add Item..."
        style={style.input}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={style.btn} onPress={() => addItem(text)}>
        <Text style={style.text}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
    backgroundColor: '#FFEEAD',
  },
  btn: {
    backgroundColor: '#FFAD60',
    padding: 9,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    color: '#D9534F',
    fontSize: 20,
  },
});

export default AddItem;
