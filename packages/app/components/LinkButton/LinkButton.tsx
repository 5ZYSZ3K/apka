import React from 'react';

import Button from 'app/components/Button';
import {useRouter} from 'solito/router';

import {LinkButtonProps} from './types';

const LinkButton: React.FC<LinkButtonProps> = ({href, children}) => {
  const {push} = useRouter();

  const handleClick = () => {
    push(href);
  };

  return <Button onPress={handleClick}>{children}</Button>;
};

export default LinkButton;
