import React from 'react';

import {NavigationProviderProps} from './types';

// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
  // eslint-disable-next-line react/jsx-no-useless-fragment
}) => <>{children}</>;
