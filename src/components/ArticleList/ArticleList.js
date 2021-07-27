import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ArticleList extends Component {
  
  render() {
    const { articles } = this.props;
    return (
      <ListGroup className='shadow'>
        { articles.map((article, index) => (
          <ListGroupItem  key={index}>
            <ArticleTeaser { ...article } />
            {/* <ArticleTeaser { ...article } id={ article.id } /> */}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default ArticleList;