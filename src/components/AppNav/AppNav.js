
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem } from 'reactstrap';
import navItems from '../../config/Sections.json';
import SearchBar from '../SearchBar/SearchBar';


const AppNav = (props) => {
  
  return (
    <Navbar color="light">
      <Nav >
        <Link to='/'>| Home |</Link>
      </Nav>
      <Nav>
        {
          navItems.map((navItem, index) =>
            <Link to={`/sections/${navItem.label.toLowerCase()}`} key={index}>
              | { navItem.label } |
            </Link>
        )}
      </Nav>
        < SearchBar handleFilterText={props.handleFilterText}/>
      < NavLink to = '/add-article' >
        <Button action bg='info' className='btn-outline-danger'>
            Add Article
        </Button>
      </NavLink>
      <NavLink to='/login'>
        Login
      </NavLink>
    </Navbar>
  )
}

export default AppNav;
