import React from 'react';
import PropTypes from "prop-types"
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper><Content>{children}</Content></Wrapper>
  
}

// eslint-disable-next-line react/no-typos
AuthLayout.PropTypes = {
    children: PropTypes.element.isRequired
}