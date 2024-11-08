import { Text, View } from "react-native";
import store from "./state/store";

import { Provider, useSelector, useDispatch } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import NavigationBar from "@/components/NavigationBar";
import { StyleSheet } from "react-native";
import SearchBar from "@/components/SearchBar";


export default function Index() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {true && <HomeScreen />}
        {true && <NavigationBar />}
        {true && <SearchBar />}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
      position: "relative",
      height: "100%",
      width: "100%",
      borderColor: "red",
      borderWidth: 0
    }
})
