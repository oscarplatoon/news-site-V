import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { addArticle } from '../api/ArticlesAPI';

const AddArticlePage = () => {
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const articleObject = {
      'title': evt.target.title.value,
      'byline': evt.target.byline.value,
      'abstract': evt.target.abstract.value
    }
    addArticle(articleObject)
    .then(resp => {
      setMessage(resp.message);
      setIsError(resp.isError);
    })

  }

  return (
    <div>
      <h1 className="m-3">Add Article Page</h1>
      {
        !message
        ?
        <Form className="m-3" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" name='title' placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Byline</Form.Label>
            <Form.Control required type="text" name='byline' placeholder="Byline" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Abstract</Form.Label>
            <Form.Control required type="text" name='abstract' placeholder="Abstract" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        :
        <Alert variant={`${isError ? 'danger' : 'success'}`}>{ message }</Alert>
    }
    </div>
  );
};

export default AddArticlePage;
