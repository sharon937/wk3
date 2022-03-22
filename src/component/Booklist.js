import React from "react";
import { FlatList, Text, SectionList, StyleSheet} from "react-native";
import Populardetail from "./Populardetail"
import Newestdetail from "./Newestdetail";
import sections from "../json/book_section.json";

const Booklist = ({navigation}) => {
    const renderSectionHeader = ({section}) =>(
        <>
            <Text style={styles.textStyle}>{section.title}</Text>
            {section.starexist ? (
                <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <Populardetail book={item} navigation={navigation} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.title }
                />
            ) : (
                <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <Newestdetail book={item} navigation={navigation}/>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.title }
                />
                )}
        </>
    );
    const renderItem = ({ item, section }) => {
        if (section.starexist)  return null;
        return null;
      };
    
      return (
        <SectionList 
          sections={sections}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          keyExtractor={ item => item.title }
          style={styles.bookStyle}
        />
      );
  
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:24,
        marginLeft:12,
        marginTop:8,
        letterSpacing:0.3,
        fontWeight:"bold"
    },
    bookStyle: {
        marginLeft:12,
        marginRight:12
    }
  });

export default Booklist;