import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 100vw;
  padding: 30px 30px;
  background-color: #f5f6fa;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;

  gap: 30px;
  max-width: 1660px;
  width: 100%;
`;

export const HomeLink = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  color: #7f8ff4;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  ::before {
    content: '';
    width: 142px;
    height: 4px;
    background-color: #7f8ff4;
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
      color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  ::after {
    content: '';
    display: block;
    margin-left: 8px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 21px solid #7f8ff4;
    border-bottom: 12px solid transparent;
    transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
      border-left 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    color: #7183f2;
    ::after {
      transform: rotate(120deg);
      border-left: 21px solid #7183f2;
    }

    ::before {
      transform: scaleX(1);
      color: #7183f2;
    }
  }
`;

export const SearchLink = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: #7f8ff4;
  text-decoration: none;
  border: 0;
  transition: color 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  padding: 12px 36px;

  :hover {
    color: #7183f2;
  }

  :active {
    color: #7183f2;
  }
`;

export const HeightHeader = styled.div`
  height: 100px;
`;
