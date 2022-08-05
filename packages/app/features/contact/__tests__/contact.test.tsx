import React from 'react';

import {render} from '@testing-library/react-native';

import ContactScreen from '../contact';

test('testing contact screen', () => {
  it('should render contact screen', () => {
    const {getByText} = render(<ContactScreen />);

    const text = getByText('Some contact data');

    expect(text).toBeDefined();
  });
});
