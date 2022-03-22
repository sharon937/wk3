
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import bookdata from "./src/json/bookdata.json";
import BookList from "./src/component/Booklist";
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <BookList list={bookdata.booklist} />
    </SafeAreaView>
  );
};

export default App;
