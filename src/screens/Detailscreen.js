import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Page 2</Text>
      <Text>{route.params.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default DetailScreen;