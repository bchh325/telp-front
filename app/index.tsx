import { Text, View } from "react-native";
import store from "./state/store";

import { Provider, useSelector, useDispatch } from "react-redux";
import NavigationBar from "@/app/components/NavigationBar";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import UserAccountScreen from "./screens/MainNavigationStack/UserAccountScreen";
import { MainStackParamList } from "./navigation_configs/types";
import Favorites from "./screens/MainNavigationStack/Favorites";
import HomeScreen from "./screens/MainNavigationStack/HomeScreen";

const MainNavigationStack = createNativeStackNavigator<MainStackParamList>()

export default function Index() {
  const navigationObject = useNavigation()

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "none"
  }

  return (
    <Provider store={store}>
      <MainNavigationStack.Navigator
        screenOptions={screenOptions}
        initialRouteName="Home"
      >
        <MainNavigationStack.Screen name="Home" component={HomeScreen} />
        <MainNavigationStack.Screen name="UserAccount" component={UserAccountScreen} />
        <MainNavigationStack.Screen name="Favorites" component={Favorites} />
      </MainNavigationStack.Navigator>
      <NavigationBar navigation={navigationObject} />
    </Provider>
  );
}
