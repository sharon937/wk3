
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import BookList from "./src/component/Booklist";
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <BookList />
    </SafeAreaView>
  );
};

export default App;
