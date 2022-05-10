import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenConfig } from "./src/config/ScreenConfig/ScreenConfig";
import { Stack } from "./src/config/StackConfig/Stack";
import { linking } from "./src/config/Linking/Linking";
import Layout from "./src/container/AppLayout/Layout";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      {/* <NavigationContainer linking={linking}>
        <Stack.Navigator>
          {ScreenConfig.map((args) => (
            <Stack.Screen key={args.name} {...args} />
          ))}
        </Stack.Navigator>
      </NavigationContainer> */}
      <Layout />
    </Provider>
  );
}
