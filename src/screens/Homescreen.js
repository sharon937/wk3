
import React from "react";
import { View } from "react-native";
import Booklist from "../component/Booklist";

const Homescreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
        <Booklist navigation={navigation}/>
    </View>
  );
};

export default Homescreen;