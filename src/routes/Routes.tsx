import Welcome from '../pages/Welcome';
import React from 'react';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import Signup from '../pages/Singup';
import Signupvit from '../pages/SingupVit';

import {Stack} from '.';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignIn"
        component={Signin}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FFEAF4',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FFEAF4',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Singup"
        component={Signup}
        options={{title: '', headerShown: true}}
      />
      <Stack.Screen
        name="Singupvit"
        component={Signupvit}
        options={{title: '', headerShown: true}}
      />
    </Stack.Navigator>
  );
}
