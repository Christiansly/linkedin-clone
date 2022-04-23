import { createNativeStackNavigator } from "@react-navigation/native-stack";
type TRootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
  InCompleteProfile: undefined;
  ResetPassword: undefined;
  Dashboard: undefined;
  Location: undefined;
  LocationCreate: undefined;
  LocationDetail: undefined;
  AlertScreen: undefined;
  TimeAndSchedulesScreen: undefined;
  CreateNewSchedule: undefined;
  ReportsScreen: undefined;
  Users: undefined;
  SettingsScreen: undefined;
  AllReportsScreen: undefined;
  InviteUsers: undefined;
  TemperatureScreen: undefined;
  AccountSettingsScreen: undefined;
  EnvironmentVariableScreen: undefined;
  LocationStatsScreen: undefined;
  CreateNewScheduleScreen: undefined;
};

export const Stack = createNativeStackNavigator<TRootStackParamList>();
