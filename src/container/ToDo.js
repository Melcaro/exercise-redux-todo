import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkTask, toggleFilter } from '../actions';

import { Task } from '../components/Task';

const ToDo = ({ tasks, checkTask, toggleFilter }) => {
  return (
    <div>
      <h1>TO DO</h1>
      <ul>
        {tasks.map((task, i) => (
          <li key={i.toString()}>
            <input
              type="checkbox"
              onChange={checkTask.bind(null, i)}
              checked={task.done}
            />
            <Task {...task} />
          </li>
        ))}
      </ul>
      <button onClick={toggleFilter}>FILTER</button>
    </div>
  );
};

const mapStateToProps = state => {
  const filteredTasks = state.tasks.filter(task => !task.done);
  return { tasks: state.filters.done ? filteredTasks : state.tasks };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ checkTask, toggleFilter }, dispatch);

const ConnectedToDO = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ConnectedToDO;
