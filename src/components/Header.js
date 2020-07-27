import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import arrow from '../arrow.png';
import { ENTER_KEY_CODE } from '../constant';

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (title.length && event.keyCode === ENTER_KEY_CODE){
      const item = {
        id: uuidv4(),
        title,
        isComplete: false
      };

      this.setState({
        title: ''
      });

      this.props.onItemSubmit(item);
    }
  };

  toggleCompleteAll = () => {
    const { toggleCompleteAll } = this.props;

    if (typeof toggleCompleteAll === 'function') {
      toggleCompleteAll();
    }
  };

  renderArrow = () => {
    return this.props.arrowShow ? <img src={arrow}/> : null;
  };

  render() {
    const { checkAllComplete } = this.props;

    return (
      <li className="header">
        <button
          onClick={this.toggleCompleteAll}
          className={`${checkAllComplete ? 'active' : ''}`}>
          {this.renderArrow()}
        </button>

        <input
          name="title"
          placeholder="What needs to be done?"
          value={this.state.title}
          onChange={this.handleChange}
          onKeyUp={this.handleSubmit}
        />
      </li>
    );
  }
}

export default Header;