import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { addArticle } from '../api/ArticlesAPI';

const AddArticlePage = () => {
  const [articleMsg, addArticleMsg] = useState(undefined)

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const articleObject = {
     "title" : evt.target.title.value,
     "byline" : evt.target.byline.value,
     "abstract": evt.target.abstract.value, 
    }
    addArticle(articleObject)
      .then(response => {
        addArticleMsg(response.message);
        console.log(response);
      })
  }

  return (
    <div>
    <h1>Add an Article</h1>  
    { articleMsg != "You good, carry on." ?
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input type="text" name="title" id="article-title" placeholder="Enter Title" required/>
        </FormGroup>
          <FormGroup>
          <Label for="byline">Byline</Label>
          <Input type="text" name="byline" id="article-byline" placeholder="Enter byline" required />
        </FormGroup>
        <FormGroup>
          <Label for="Abstract">Abstract</Label>
         <Input type="textarea" name="abstract" id="article-abstract" required/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      : <h1>Victory! You are now a published journalist!</h1>
    }
    </div>
  );
};

export default AddArticlePage;