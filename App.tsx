
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes';

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#DF2B6A" barStyle="light-content" />
      <Routes/>

    </NavigationContainer>

  );
}




