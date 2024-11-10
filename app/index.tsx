import { Text, View } from "react-native";
import store from "./state/store";

import { Provider, useSelector, useDispatch } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import NavigationBar from "@/components/NavigationBar";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import UserAccountScreen from "./screens/UserAccountScreen";
import { RootStackParamList } from "./navigation_configs/types";
import Favorites from "./screens/Favorites";

const StackInstance = createNativeStackNavigator<RootStackParamList>()

export default function Index() {
  const navigationObject = useNavigation()

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "none"
  }

  return (
    <Provider store={store}>
      <StackInstance.Navigator
        screenOptions={screenOptions}
        initialRouteName="Home"
      >
        <StackInstance.Screen name="Home" component={HomeScreen} />
        <StackInstance.Screen name="UserAccount" component={UserAccountScreen} />
        <StackInstance.Screen name="Favorites" component={Favorites} />
      </StackInstance.Navigator>
      <NavigationBar navigation={navigationObject} />
    </Provider>
  );
}
