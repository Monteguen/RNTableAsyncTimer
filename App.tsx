// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainNavigation from './app/navigation';

function App() {
  return (
    <NavigationContainer>
     <MainNavigation />
    </NavigationContainer>
    
  );
}

export default App;