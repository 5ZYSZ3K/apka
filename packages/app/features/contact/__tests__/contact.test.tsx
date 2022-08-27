import React from 'react';

import {render} from '@testing-library/react-native';

import ContactScreen from '../contact';

jest.mock('solito/moti', () => ({
  MotiLink: ({children}: {children: React.ReactElement}) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  },
}));

describe('testing contact screen', () => {
  it('should render contact screen', () => {
    const {getByText} = render(<ContactScreen />);

    const text = getByText('Some contact data');

    expect(text).toBeDefined();
  });
});
