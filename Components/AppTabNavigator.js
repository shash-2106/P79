import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonorScreen from '../screens/DonorScreen';
import VolunteerScreen from '../screens/VolunteerScreen';

export const AppTabNavigator = createBottomTabNavigator({
   DonorScreen:{screen:DonorScreen},
   VolunteerScreen:{screen:VolunteerScreen}
})