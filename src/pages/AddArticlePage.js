import {Component} from 'react'
import { Form, FormGroup, Button, Input, Label } from "reactstrap"
import ArticlesAPI from "../api/ArticlesAPI"

class AddArticlePage extends Component {
  state = {
    isSubmitted:false,
    submissionSuccess:false,
    subMessage: ""
    }
  handleForm = (evt) => {
    evt.preventDefault();
    let articleObject = {
      'title': evt.target.title.value,
      'byline': evt.target.byline.value,
      'abstract': evt.target.abstract.value
    }
    setState({
      isSubmitted:true,
    })
    ArticlesAPI.addArticle(articleObject)
      .then((json) => {
        if (json.isError == false) {
          setState({
            SubmissionSuccess:true,
            subMessage:json.message
          })
        } else if (json.isError == true) {
          setState({
            subMessage:json.message
          })
        }
        console.log(json.isError)
      })
  }


  render() { 
    return ( 
      <div>
        { this.state.isSubmitted && this.state.submissionSuccess?
          <h4 className='bg-success text-dark'> {this.state.subMessage}</h4>
          : !this.state.isSubmitted ? <h4 className='bg-secondary text-light'> Please fill out the form: </h4>
          : <h4 className='bg-danger text-warning'>{this.state.subMessage}</h4>
        }
        <Form onSubmit={this.handleForm}>
          <FormGroup>
            <Label>
              Title:
            </Label>
            <Input required type='text' name='title' placeholder='Rabid puppies arise from the depths' />
          </FormGroup>
          <FormGroup>
            <Label>
              Byline:
            </Label>
            <Input required type='text' name='byline' placeholder='By: Dr. So-and-so' />
          </FormGroup>
          <FormGroup>
            <Label>
              Abstract:
            </Label>
            <Input required type='textarea' name='abstract' placeholder='Article Abstract Goes Here' />
          </FormGroup>
          <Button color='success' type='submit'>Submit Article</Button>
        </Form>
      </div>
     );
  }
}
 
export default AddArticlePage;