import React from 'react';

// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking

// eslint-disable-next-line react/jsx-no-useless-fragment
export const NavigationProvider: React.FC = ({children}) => <>{children}</>;
