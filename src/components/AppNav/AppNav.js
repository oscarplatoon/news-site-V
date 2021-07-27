import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import navItems from '../../config/Sections.json';
import { withRouter } from "react-router";

// --- Class Based Component
// class AppNav extends Component {

//   render() {
//     console.log(this.props)

//     const createNavItems = () => {
//       return navItems.map((navItem, idx) => {
//         return <Nav.Link key={idx} onClick={() => this.props.history.push(`/sections/${navItem.value}`)}>{ navItem.label }</Nav.Link>
//       })
//     }

//     return (
//       <Navbar bg="dark" variant="dark">
//           <Navbar.Brand href="/" className='m-2'>News Site</Navbar.Brand>
//             <Nav className="me-auto">
//             {
//               createNavItems()
//             }
//             </Nav>
//             <Form className='d-flex' onSubmit={ this.props.handleSearch }>
//               <FormControl type="search" placeholder="Search" className="mr-2" name='search' />
//               <Button type='submit' variant="outline-success">Search</Button>
//             </Form>
//       </Navbar>
//     )
//   }
// }

// --- Functional Component
const AppNav = (props) => {
  const { handleSearch } = props;


  const createNavItems = () => {
    return navItems.map((navItem, idx) => {
      return <Nav.Link key={idx} onClick={() => props.history.push(`/sections/${navItem.value}`)}>{navItem.label}</Nav.Link>
    })
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className='m-2'>News Site</Navbar.Brand>
      <Nav className="me-auto">
        {
          createNavItems()
        }
        <Button href='/login' variant='outline-primary' className='mx-2'>Login</Button>
        <Button href='/add-article' variant='outline-secondary' className='mx-2'>Add Article</Button>
      </Nav>
      <Form className='d-flex' onSubmit={handleSearch}>
        <FormControl type="search" placeholder="Search" className="mr-2" name='search' />
        <Button type='submit' variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  )
}

export default withRouter(AppNav);
