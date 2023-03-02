import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../../screens/auth_stack/SignInScreen';
import CompanySetUpScreen from '../../screens/CompanySetupScreen';
import {AuthStackParams} from '../types/types';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="CompanySetUpScreen" component={CompanySetUpScreen} />
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
};

export default AuthStack;
