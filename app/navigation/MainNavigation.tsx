import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { About, Quotes } from '../pages';
import { TabParams } from './types';
const Tab = createMaterialBottomTabNavigator<TabParams>();
const MainNavigation = () => (
<Tab.Navigator>
    <Tab.Screen 
    name='About'
    component={About} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <Icon name="home" color={color} size={23} />
      ),
    }}
    />
    <Tab.Screen 
     options={{
      tabBarLabel: 'About',
      tabBarIcon: ({ color }) => (
        <Icon name='cubes' color={color} size={23} />
      ),
    }}
    name='Quotes' 
    component={Quotes} />
    </Tab.Navigator>
)
export default MainNavigation