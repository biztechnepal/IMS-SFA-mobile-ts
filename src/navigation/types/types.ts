import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  MainStack: NavigatorScreenParams<MainStackParams>;
};
export type AuthStackParams = {
  SignIn: undefined;
  CompanySetUpScreen: undefined;
};

export type MainStackParams = {
  PunchIn: undefined;
  DrawerStack: NavigatorScreenParams<DrawerStackParams>;
  MyVisits: undefined;
  MyActivities: undefined;
  Allowances: undefined;
  Notifications: undefined;
  MiniDashboard: undefined;
};

export type DrawerStackParams = {
  Home: undefined;
};

export type HomeStackParams = {};
