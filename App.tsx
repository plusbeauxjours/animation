import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleGuide} from './src/components';
import {Lessons} from './src/components/Routes';
import ClockValues from './src/ClockValues';

const Stack = createStackNavigator<Lessons>();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: StyleGuide.palette.primary,
        borderBottomWidth: 0,
      },
      headerTintColor: 'green',
    }}>
    <Stack.Screen
      name="ClockValuesAndIdentities"
      component={ClockValues}
      options={{
        title: 'Clock Values & Identities',
      }}
    />
  </Stack.Navigator>
);

const App = () => <AppNavigator />;

export default App;
