import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default MainLayout;
