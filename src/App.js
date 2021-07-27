import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage.js';
import AddArticlePage from './pages/AddArticlePage.js';
import LoginPage from './pages/LoginPage.js';


// --- Class Based Component
// class App extends Component {

//   state = {
//     query: null
//   }

//   handleSearch = (evt) => {
//     evt.preventDefault()
//     let searchQuery = evt.target.search.value;
//     this.setState({
//       query: searchQuery
//     })
//   }


//   render() {

//     const renderHomePage = () => {
//       return (
//         <HomePage query={this.state.query} />
//         )
//     }

//     return (
//       <div>
//       <Router>
//           <AppNav handleSearch={this.handleSearch}/>
//           <div>
//             <Route exact path="/" render={renderHomePage} />
//             <Route exact path="/articles/:articleID" component={ArticlePage} />
//             <Route exact path="/sections/:sectionID" component={SectionPage} />
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// --- Functional Component
const App = () => {
  const [query, setQuery] = useState(null);

  const handleSearch = (evt) => {
    evt.preventDefault()
    let searchQuery = evt.target.search.value;
    setQuery(searchQuery);
  }

  const renderHomePage = () => {
    return (
      <HomePage query={query} />
    )
  }

  const renderSectionPage = () => {
    return (
      <SectionPage query={query} />
    )
  }

  return (
    <div>
      <Router>
        <AppNav handleSearch={handleSearch} />
        <div>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/articles/:articleID" component={ArticlePage} />
          <Route exact path="/sections/:sectionID" render={renderSectionPage} />
          <Route exact path="/add-article" component={AddArticlePage} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
