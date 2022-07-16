import {NavigationProvider} from './navigation';
import {SafeArea} from './safe-area';

export function Provider({children}: {children: React.ReactNode}) {
  return (
    <NavigationProvider>
      <SafeArea>{children}</SafeArea>
    </NavigationProvider>
  );
}
