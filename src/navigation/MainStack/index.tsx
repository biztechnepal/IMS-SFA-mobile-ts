import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PunchInScreen from '../../screens/main_stack/PunchInScreen';
import {MainStackParams} from '../types/types';

const {Navigator, Screen} = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Navigator>
      <Screen name="PunchIn" component={PunchInScreen} />
      <Screen name="DrawerStack" component={PunchInScreen} />
    </Navigator>
  );
};

export default MainStack;
