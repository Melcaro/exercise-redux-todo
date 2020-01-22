import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTask, checkTask, toggleFilter, fetchTask } from '../actions';

import { Task } from '../components/Task';

class ToDo extends React.Component {
  state = {
    newTask: '',
    stateHasChanged: false,
  };
  componentDidMount() {
    this.props.fetchTask();
  }

  componentDidUpdate(prevProps, prevState) {
    const { stateHasChanged } = prevState;
    if (stateHasChanged !== this.state.stateHasChanged) {
      this.props.fetchTask();
    }
  }

  onChange = ({ target: { value: newTask } }) => {
    this.setState({ newTask });
  };

  addNewTask = e => {
    const { newTask, stateHasChanged } = this.state;
    e.preventDefault();
    this.props.createTask(newTask);
    this.setState({
      newTask: '',
      stateHasChanged: !this.state.stateHasChanged,
    });
  };

  render() {
    const {
      tasks: { isLoading, tasks: tasksList, error },
      checkTask,
      toggleFilter,
    } = this.props;
    console.log(tasksList);
    const loader = isLoading && <h1>LOADING</h1>;

    return (
      loader || (
        <div>
          <h1>TO DO</h1>
          <ul>
            {tasksList.map((task, i) => (
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
          <div>
            <h2>Add a new task:</h2>
            <input
              type="text"
              value={this.state.newTask}
              onChange={this.onChange}
            ></input>
            <input type="submit" value="ADD" onClick={this.addNewTask}></input>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  //const filteredTasks = state.tasks.filter(task => !task.done);
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { createTask, checkTask, toggleFilter, fetchTask },
    dispatch
  );

const ConnectedToDO = connect(mapStateToProps, mapDispatchToProps)(ToDo);

export default ConnectedToDO;
