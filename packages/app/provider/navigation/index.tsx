import React, {useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import * as Linking from 'expo-linking';

export const NavigationProvider: React.FC = ({children}) => {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              contact: 'contact',
              instructions: 'instructions',
            },
          },
        }),
        [],
      )}>
      {children}
    </NavigationContainer>
  );
};
