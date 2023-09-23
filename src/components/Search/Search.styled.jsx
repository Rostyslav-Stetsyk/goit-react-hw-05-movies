import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  position: relative;
  width: calc(100vw - 60px);
  border: 0;
  outline: 0;
  padding: 10px 18px;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
