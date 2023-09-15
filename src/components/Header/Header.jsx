import { Search } from 'components/Search/Search';
import { Homelink, HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Homelink href="#">MovieHub</Homelink>
      <Search />
    </HeaderStyled>
  );
};
