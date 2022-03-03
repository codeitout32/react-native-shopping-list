import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const style = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#FFAD60',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 23,
  },
});

export default Header;
