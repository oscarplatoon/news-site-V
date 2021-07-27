const URL = 'http://localhost:3001/api/articles'

const fetchArticleByID = async (articleID) => {
  try {
    let response = await fetch(`${URL}/${articleID}`)
    let data = await response.json()
    return data
  }
  catch(err) {
    console.log(err)
  }
}

const fetchArticlesBySection = async (section) => {
  try {
    const response = await fetch(`${URL}?filter={"where":{"section":"${section}"}}`);
    const data = await response.json();
    return data;
  }
  catch(err) {
    console.error('There was an error.')
  }
};

const fetchArticles = (filters = null) => {
  console.log('Fetch Articles')
  try {
    return fetch(`${URL}${filters !== null ? `?filter={"where":{"title":{"ilike":"${filters}"}}}` : ''}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.log(err)
    })
  }
  catch(err) {
    console.error(err)
  }
}

const addArticle = async (articleObject) => {
  try {
    let response = await fetch(URL, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(articleObject)
    })
    let data = await response.json();
    if (data.error) {
      return {
        'message': 'There was an error saving your message. Please make sure all fields are filled.',
        'isError': true,
        'statusCode': 200
      }
    }
    else {
      return {
        'message': 'Article Successfully Created',
        'isError': false,
        'statusCode': 200
      }
    }
  }
  catch (err) {
    console.error(err)
  }
}


export {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  addArticle
};
