import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';

const DetailScreen = ({route}) => {
  return (
    <ScrollView >
      <View style={styles.container}>
      <Image  
          style={styles.detailIMG}
          source={{uri:route.params.image}}
      />
      <Text style={styles.textStyle}>{route.params.title}</Text>
      <Text style={styles.bStyle}>{route.params.author}</Text>
      <View style={styles.star}>
        <Image  
            style={styles.starIMG}
            source={{uri:route.params.star}}
        />
        <Text style={styles.cStyle}>{route.params.bbb}</Text>
        <Text style={styles.aStyle}>/5.0</Text>
      </View>
      <Text style={styles.contentStyle}>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
      <Pressable style={styles.buttonStyle}>
        <Text style={styles.buyStyle}>BUY NOW FOR $46.99</Text>
      </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  star:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    marginBottom:16
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:28,
    marginBottom:8,
   
  },
  detailIMG: {
    width: 210,
    height: 300,
  },
  contentStyle:{
    fontSize: 14,
    fontWeight: '400',
    lineHeight:24,
    textAlign:'center'
  },
  bStyle:{
    fontSize: 14,
    opacity:0.5,
    marginBottom:8
  },
  cStyle:{
    fontSize: 14,
    letterSpacing:1.2
  },
  aStyle:{
    fontSize: 14,
    opacity:0.5,
    letterSpacing:1.2
  },
  starIMG:{
    width: 86,
    height: 14,
    marginRight:8
  },
  buttonStyle:{
    width: 190,
    height: 36,
    backgroundColor:"#6200EE",
    justifyContent:"center",
    alignItems:"center",
    marginTop:28,
    marginBottom:60,
    borderRadius:4
  },
  buyStyle:{
    color:"#FFFFFF",
    fontSize:14,
    lineHeight:16,
    letterSpacing:0.8
  },
});

export default DetailScreen;