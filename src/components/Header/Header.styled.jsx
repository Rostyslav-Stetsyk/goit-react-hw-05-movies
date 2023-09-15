import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #f5f6fa;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
`;

export const Homelink = styled.a`
  display: flex;
  font-weight: 500;
  font-size: 24px;
  color: #7183f2;
  text-decoration: none;
  ::after {
    content: '';
    display: block;
    margin-left: 8px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 21px solid #7183f2;
    border-bottom: 12px solid transparent;
  }
`;
