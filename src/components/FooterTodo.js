import React, { Component } from 'react';

class FooterTodo extends Component{
  renderClearButton = () => this.props.countCompleted ? <button onClick={this.onClearCompletedClick}> Clear completed</button> : null;

  onClearCompletedClick = () => {
    const { onClearCompleted } = this.props;

    if (typeof onClearCompleted === 'function') {
      onClearCompleted();
    }
  };

  onChangeFilter = (filter) => {
    const { onChangeFilter } = this.props;

    if (typeof onChangeFilter === 'function') {
      onChangeFilter(filter);
    }
  };

  render() {
    const { currentFilter, total } = this.props;

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
          <div>{total} item left</div>

          <div>
            {buttons.map(button => (
              <button
                key={button.filter}
                className={`${currentFilter === button.filter ? 'active' : ''}`}
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