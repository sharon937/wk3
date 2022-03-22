import React from "react";
import { FlatList, Text} from "react-native";
import Bookdetail from "./Bookdetail";

const Booklist = ({list}) => {
    const renderItem = ({item}) =><Bookdetail book={item} />;
  return (
    <>
        <Text style={ {fontSize:24,marginLeft:20,letterSpacing:0.3,fontWeight:"bold"}}>Popular Books</Text>
        <FlatList
            horizontal={true}
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    </>
  );
};

export default Booklist;