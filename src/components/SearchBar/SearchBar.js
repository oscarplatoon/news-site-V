import { Component } from 'react'
import {
  Button,
  Form,
  FormGroup, 
  Input, 
  InputGroup, 
  InputGroupAddon 
} from 'reactstrap' 


class SearchBar extends Component {
  handleSearch = (evt) => {
    evt.preventDefault()
    console.log(evt.target.input.value)
    this.props.handleFilterText(evt.target.input.value)
  }

  render() { 
    return (
      <Form className='form-inline' onSubmit={this.handleSearch}>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType='prepend' type='submit'>
              <Button color='secondary'>Search</Button>
            </InputGroupAddon>
            <Input name='input' type="text" placeholder="Filter Articles" />
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}
 
 
export default SearchBar;