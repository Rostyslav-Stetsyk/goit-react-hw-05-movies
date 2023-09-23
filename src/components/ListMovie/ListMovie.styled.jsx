import styled from '@emotion/styled';

export const ListMovieWrapper = styled.ul`
  display: grid;
  width: 396px;
  grid-template-columns: repeat(auto-fill, min(300px));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 48px 48px 48px 48px;
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
