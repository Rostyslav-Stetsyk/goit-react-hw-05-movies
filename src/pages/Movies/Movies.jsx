import { Search } from 'components/Search/Search';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <Search />
      <Outlet />
    </div>
  );
};
