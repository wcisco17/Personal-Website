import React from 'react';

import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';


const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.primaryLink};
  }
`;

const SocialLink = ({  name, url, children }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank">
         {children}
    </IconLink>
  </Tooltip>
);


export default SocialLink;