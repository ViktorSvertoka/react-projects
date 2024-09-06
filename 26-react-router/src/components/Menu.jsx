import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}

export default Menu;
