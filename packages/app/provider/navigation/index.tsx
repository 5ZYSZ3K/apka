import {useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import * as Linking from 'expo-linking';

export function NavigationProvider({children}: {children: React.ReactNode}) {
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
}
