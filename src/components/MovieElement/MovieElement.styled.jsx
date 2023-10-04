import styled from '@emotion/styled';

export const ListMovieEl = styled.li`
  position: relative;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const MovieTitle = styled.h2`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #7182f2bb;
  font-size: large;
  font-weight: 600;
  padding: 16px;
  min-height: 80px;
  line-height: 1.3;
  text-decoration-line: none;
  color: white;
  text-align: center;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;
