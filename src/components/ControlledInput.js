// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
  event.preventDefault()
  this.sendFormDataSomewhere(this.state)
}

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </form>
    );
  }
}

export default ControlledInput;
