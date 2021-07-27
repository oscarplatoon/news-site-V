import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';
import HomePage from '../../pages/HomePage';

class AppNav extends Component {
  render() {
    return (
      
      <Navbar color="black">
        <Link to='/'>HOME</Link>
        {navItems.map((navItem) =>
          <Link to={`/sections/${navItem.value}`} >
            { navItem.label }
          </Link>
        )}
        <Link to='/add-article'>ADD ARTICLE</Link>
        <Link to='/login'>LOGIN</Link>
      </Navbar>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav() {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <Link to={`/sections/${navItem.value}`} >
//           {navItem.label}
//         </Link>
//       )}
//     </Navbar>
//   );
// }
