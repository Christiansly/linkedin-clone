import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NativeStackNavigationEventMap } from "@react-navigation/native-stack/lib/typescript/src/types";
import Home from "../../components/Base";
import { TRootStackParamList } from "../../../types/types";

type TNavigationScreensConfig = RouteConfig<
  TRootStackParamList,
  keyof TRootStackParamList,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> & {
  protectedRoute?: boolean;
};

export const ScreenConfig: TNavigationScreensConfig[] = [
  {
    name: "Home",
    component: Home,
    options: { headerShown: false },
  },
];
