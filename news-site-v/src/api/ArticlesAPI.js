const BASE_URL = 'http://localhost:3001/api/articles';

const fetchArticleByID = async (articleID) => {
  const response = await fetch(`${BASE_URL}/${articleID}`);
  const data = await response.json();
  return data;
};

const fetchArticlesBySection = async (section) => {
  const response = await fetch(`${BASE_URL}?filter={"where":{"section":"${section}"}}`);
  const data = await response.json();
  return data;
};

const fetchArticles = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const searchArticles = async (textToSearchFor) => {
  const response = await fetch(`${BASE_URL}?filter={"where":{"title":{"ilike":"${textToSearchFor}"}}}`)
  const data = await response.json();
  return data;
}

const AddArticle = async (articleObject) => {
  try{
    let response = await fetch(BASE_URL, {
      header: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(articleObject)
    })
    let data = await response.json();
    console.log(data)
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
  searchArticles,
  AddArticle,
};
