import React, { PropTypes } from "react";
import { connect } from "react-redux";
import ListPanel from "../components/ListPanel";
import { List as ImmList, Map } from "immutable";
import { addTask } from "../actions/base";

const TaskPanel = ({ tasks, onAddTask, style }) => (
  <ListPanel listItems={tasks} listTitle="Tasks" emptyMessage="No tasks added" addItem={onAddTask} style />
)

TaskPanel.propTypes = {
  tasks: PropTypes.instanceOf(ImmList).isRequired,
  onAddTask: PropTypes.func.isRequired,
  style: PropTypes.object
};

function mapStateToProps(state) {
  let bState = state.base;
  let selectedProject = bState.getIn(["ui", "selectedProject"]);
  let tids = bState.getIn(["projectsById", `${selectedProject}`, "tids"]);
  return {
    tasks: tids.map(id => bState.getIn(["tasksById", `${id}`]))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTask: (name) => {
      dispatch(addTask(name));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPanel);
