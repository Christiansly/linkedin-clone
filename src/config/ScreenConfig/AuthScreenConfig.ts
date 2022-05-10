import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NativeStackNavigationEventMap } from "@react-navigation/native-stack/lib/typescript/src/types";
import CreateAccountScreen from "../../../../screens/CreateAccountScreen";
import ForgotPasswordScreen from "../../../../screens/ForgotPasswordScreen";
import IncompleteProfileScreen from "../../../../screens/IncompleteProfileScreen";
import LoginScreen from "../../../../screens/LoginScreen";
import ResetPasswordScreen from "../../../../screens/ResetPasswordScreen";
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

export const AuthScreenConfig: TNavigationScreensConfig[] = [
  {
    name: "Login",
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: "CreateAccount",
    component: CreateAccountScreen,
    options: { headerShown: false },
  },
  {
    name: "ForgotPassword",
    component: ForgotPasswordScreen,
    options: { headerShown: false },
  },
  {
    name: "InCompleteProfile",
    component: IncompleteProfileScreen,
    options: { headerShown: false },
  },
  {
    name: "ResetPassword",
    component: ResetPasswordScreen,
    options: { headerShown: false },
  },
];
