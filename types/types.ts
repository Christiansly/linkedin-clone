import React from "react";
import { TextProps } from "react-native";

export type AppChildren = {
  children: any;
};

export type TButton = {
  children: any;
  onPress: () => any;
  buttonstyles?: { text: object; button: object };
};

export type TText = {
  children: any;
  textstyles?: object;
  onPress?: () => any;
  otherProps?: TextProps;
};

export type TClickableText = {
  children: any;
  textstyles?: object;
  onPress: () => any;
  otherProps?: TextProps;
};

export type TMessage = {
  children: any;
  messagestyles: object;
};

export type TAccountContainer = {
  children: any;
  screen?: any;
  navigation?: any;
};

export type TRootStackParamList = {
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
  Home: undefined;
};

export type TFormContainer = {
  children: any;
  height: string;
  navigation?: any;
};

export type TAuthContext = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

export type TSideBar = {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  drawerWidth: number;
  window: any;
};

export type TDashboardScreen = {};

export type TWeatherTimeCard = {
  icon: any;
  time: string;
  // temp: number,
  // humidity: string
};

export type TOxygen8AppBar = {
  window: number;
};

export type TLayout = {
  children: React.Component[];
};

export type THeader = {
  handleDrawerToggle: () => void;
};

export type TTitleBar = {
  title: string;
  children?: any;
  left: any;
  right: any;
  mid: any;
};

export type TTemperatureBar = {};

export type TTheme = {
  palette: { primary: any; secondary: object; error: object; warning: object };
  components: {};
};

export type TCarouselItem = {
  time: string;
  icon: any;
  temperature: number;
  humidity: number;
};

export type TEnvironmentDataCard = {
  icon: any;
  value: string;
  trend: { value: number; trend: string };
  title: string;
};

export type TTrendText = {
  value: number;
  trend: string;
};

export type TDataPoints = {
  dataPoints: {
    name: string;
    color: string;
  }[];
};

export type TSingleDataPoint = {
  name: string;
  color: string;
};

export type TChart = {
  children: any;
  data: [];
};

export type TChartTitleBar = {
  // dataPoints: {
  //   name: string,
  //   color: string,
  // }[],
  // title: string,
  children: any;
};

export type TDropdown = {
  data: { label: string; value: string }[];
  onSelectedFunction: () => void;
  onValueChangeFunction: (value: any, index?: any) => void;
};

export type TChartToolTip = {
  active: string;
  payload: [];
  label: any;
};

export type TFormRow = {
  children: any;
};

export type THalfFormRow = {
  children: any;
};

export type TFormColumn = {
  children: any;
};

export type TSubmitButton = {
  text: string;
  onPress: () => void;
};

export type TFormTitle = {
  text: string;
};

export type TDayButton = {
  text: string;
};

export type TRowData = {
  rowData: any[];
};

export type TTable = {
  data: any[];
  headData: any[];
};

export type THeadData = {
  headData: any[];
};

export type TTitleBarText = {
  title: string;
};

export type TEnvironmentVariablesChart = {
  title: string;
  daySelectFunction: () => void;
  data: any[];
  colors: {
    color1: string;
    color2: string;
  };
  colorId: number;
  average: [
    {
      title: string;
      value: number;
    },
    {
      title: string;
      value: number;
    }
  ];
};

export type TAverageDisplay = {
  title: string;
  value: number;
};

export type TAreaChartComponent = {
  data: any[];
  colors: {
    color1: string;
    color2: string;
  };
  colorId: number;
};

export type TBarChart = {
  header: any;
  color: string;
  data: any[];
};

export type TBarChartHeader = {
  children: any[];
};

export type TBarChartDisplay = {
  color: string;
  data: any[];
};

export type TTimeAndScheduleContainer = {
  noBorder: boolean;
};

export type TBackButton = {
  onPress: () => void;
};

export type TCustomAxis = {
  x: number;
  y: number;
  payload: {
    value: number;
  };
};

export type TPageLayout = {
  children: any;
};
