import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './types/types';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="AuthStack" component={AuthStack} />
      <Screen name="MainStack" component={MainStack} />
    </Navigator>
  );
};

export default AppNavigation;
