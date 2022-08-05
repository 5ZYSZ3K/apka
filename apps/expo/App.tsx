import React from 'react';

import {NativeNavigation} from '@app/navigation/native';
import {Provider} from '@app/provider';

const App: React.FC = () => {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  );
};

export default App;
