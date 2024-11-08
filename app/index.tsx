import { Text, View } from "react-native";
import store from "./state/store";

import { Provider, useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";
import { Counter } from "./Counter";
import HomeScreen from "./screens/HomeScreen";
import NavigationBar from "@/components/NavigationBar";


export default function Index() {

  return (
    <Provider store={store}>
      {false && <HomeScreen />}
      {true && <NavigationBar />}
    </Provider>
  );
}
