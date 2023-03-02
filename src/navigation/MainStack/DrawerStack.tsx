import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/main_stack/drawer_stack/HomeScreen';
import {DrawerStackParams} from '../types/types';

const {Navigator, Screen} = createNativeStackNavigator<DrawerStackParams>();

const DrawerStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      {/* <Screen name="" component={PunchInScreen} /> */}
    </Navigator>
  );
};

export default DrawerStack;
