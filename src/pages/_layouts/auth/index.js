import React from 'react';
import PropTypes from "prop-types"
import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>
  
}

// eslint-disable-next-line react/no-typos
AuthLayout.PropTypes = {
    children: PropTypes.element.isRequired
}