import styled from '@emotion/styled';

export const ListMovie = styled.ul`
  display: grid;
  width: 396px;
  grid-template-columns: repeat(auto-fill, min(300px));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 160px 48px 48px 48px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 712px) {
    width: 712px;
  }
  @media (min-width: 1028px) {
    width: 1028px;
  }
  @media (min-width: 1344px) {
    width: 1344px;
  }
  @media (min-width: 1660px) {
    width: 1660px;
  }
`;

export const ListMovieEl = styled.li`
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieTitle = styled.h2`
  font-size: large;
  font-weight: 600;
  padding: 16px;
  min-height: 80px;
  line-height: 1.3;
`;
