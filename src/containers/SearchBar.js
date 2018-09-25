import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value)
    this.setState({
      term: event.target.value
    })
  }

  handleSubmitForm(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form action="" className="input-group" onSubmit={this.handleSubmitForm}>
        <input
        type="text"
        className="form-control"
        placeholder="Get a five-day forecast in your favourite city"
        onChange={this.handleInputChange}
        value={this.state.term} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
