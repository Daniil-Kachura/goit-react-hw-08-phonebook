import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: rgba(255, 165, 52, 1);
  font-size: 16px;

  &.active {
    color: rgb(255, 255, 255);
    font-weight: 400;
  }
`;
