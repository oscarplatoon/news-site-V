import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { fetchArticlesBySection } from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList.js'


const SectionPage = (props) => {
  const [articles, setArticles] = useState([])
  const [section, setSection] = useState(null)

  useEffect(() => {
    let sectionID = props.match.params.sectionID;
    if (props.query) {
      props.history.push('/')
    }
    if (sectionID !== section) {
      setSection(sectionID);
      console.log(sectionID)
      fetchArticlesBySection(sectionID)
      .then(res => setArticles(res))
    }
  })

  return (
    <div>
      <h1>{`${section} Section`}</h1>
      <ArticleList articles={articles} />
      <Link to='/'>Back</Link>
    </div>

  );
};

export default withRouter(SectionPage);
