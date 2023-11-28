import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/home'>
      <h1 class=" rounded-lg text-3xl font-mono text-black mb-4   p-3">My Portfolio</h1>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
