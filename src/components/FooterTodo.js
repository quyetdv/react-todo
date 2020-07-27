import React, { Component } from 'react';

class FooterTodo extends Component{
  constructor(props) {
    super(props);

    this.state = {
      filterButton: 'all'
    }
  }

  renderClearButton = () => this.props.countCompleted ? <button onClick={() => this.onClearCompletedClick()}> Clear completed</button> : null;

  onClearCompletedClick = () => {
    const { onClearCompletedClick } = this.props;

    if (typeof onClearCompletedClick === 'function') {
      onClearCompletedClick();
    }
  };

  onChangeFilter = (filter) => {
    this.props.onChangeFilter(filter);

    this.setState({filterButton:filter})
  };

  render() {
    const { filterButton } = this.state;

    const buttons = [
      {
        label: 'All',
        filter: 'all'
      },
      {
        label: 'Active',
        filter: 'active'
      },
      {
        label: 'Completed',
        filter: 'completed'
      }
    ];

    return (
      <li className="footer">
        <div className="footer-left">
          <div>{this.props.total} item left</div>

          <div>
            {buttons.map(button => (
              <button
                key={button.filter}
                className={`${filterButton === button.filter ? 'active' : ''}`}
                onClick={() => this.onChangeFilter(button.filter)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {this.renderClearButton()}
      </li>
    )
  }
}

export default FooterTodo;