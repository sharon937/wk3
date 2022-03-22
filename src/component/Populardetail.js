import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const Populardetail =({ book, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
          <Pressable 
            onPress={() => navigation.navigate('Detail', book)}
          >
            <Image
              style={styles.imgStyle}
              source={{uri: book.image}}
            />
          </Pressable>
         <Text style={styles.nameStyle}>{book.title}</Text>
          <Text style={styles.authorStyle}>{book.author}</Text>  
      </View>
  )};

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    width: 140,
    marginBottom:16
  },
  nameStyle: {
    fontSize: 16,
    fontWeight:"bold",
    marginBottom:8
  },
  authorStyle: {
    fontSize: 12,
    fontWeight:"bold",
    opacity:0.5,
},
  cardContainerStyle: {
    justifyContent: "flex-start",
    marginTop: 16,
    marginBottom:16,
    marginLeft:8,
    marginRight:8
  },

});

export default Populardetail;