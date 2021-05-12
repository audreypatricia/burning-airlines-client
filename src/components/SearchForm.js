import React, { Component } from 'react';

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
      <div>
        <form onSubmit={ this._handleSubmit }>
          <label>
            From:
            <input type="text" name="from" value={ this.state.from } onChange={ this._handleChange }  required/>
          </label>
          <label>
            To:
            <input type="text" name="to" value={ this.state.to } onChange={ this._handleChange } required/>
          </label>
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
