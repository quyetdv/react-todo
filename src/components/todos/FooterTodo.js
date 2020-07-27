import React from 'react';

const FooterTodo = ({ total, countCompleted, currentFilter, setVisibilityFilter, clearCompleted }) => {
  const renderClearButton = () => countCompleted ? <button onClick={handleClearCompleted}> Clear completed</button> : null;

  const handleClearCompleted = () => {
    clearCompleted()
  };

  const onChangeFilter = (filter) => {
    setVisibilityFilter(filter)
  };

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
                onClick={() => onChangeFilter(button.filter)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {renderClearButton()}
      </li>
    )
}

export default FooterTodo;