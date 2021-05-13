import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SearchForm extends Component {
  constructor(){
    super();
    this.state = {
      from: '',
      to: '',
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.from, this.state.to);
    this.setState({
      from: '',
      to:''
    })
  }

  render() {
    return(
      <div className="form-group">
        <form onSubmit={ this._handleSubmit }>
          <label>
            From:
            <input id= "SearchForm" className="form-control" type="text" name="from" value={ this.state.from } onChange={ this._handleChange }  required/>
          </label>
          <label>
            To:
            <input id= "SearchForm" className="form-control" type="text" name="to" value={ this.state.to } onChange={ this._handleChange } required/>
          </label>
          <input className="form-control" type="submit" value="search" id="submit" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
