import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesWrapper = styled.div`
  padding: 0 30px;
  padding-top: 20px;
  max-width: 1660px;
  margin: 0 auto;
`;

export const GetBackButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: white;
  background-color: #7f8ff4;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;

  :hover {
    background: #7183f2;
  }

  :active {
    background: #7f8ff4;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;
