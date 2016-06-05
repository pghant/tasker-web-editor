import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import Drawer from "material-ui/Drawer";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { List, ListItem, MakeSelectable } from "material-ui/List";
import Dialog from "material-ui/Dialog";
import { List as ImmList, Map } from "immutable";
import { addProject } from "../actions/base";

const ENTER_KEY_CODE = 13;
let SelectableList = MakeSelectable(List);

class ProjectList extends Component {
  state = {
    dialogOpen: false,
    dialogText: ""
  };

  handleOpen = () => {
    this.setState({ dialogOpen: true });
  }

  handleClose = () => {
    this.setState({ dialogOpen: false, dialogText: "" })
  }

  addNewProject = () => {
    this.props.onAddProject(this.state.dialogText);
    this.handleClose();
  }

  render() {
    const dialogActions = [
      <FlatButton label="Cancel" onTouchTap={this.handleClose} />,
      <FlatButton label="Add" onTouchTap={this.addNewProject} primary={true} />
    ];
    return (
      <div>
        <Drawer containerStyle={{position: "absolute", top: 0, bottom: 0}}>
          <SelectableList defaultValue={this.props.selectedProject}>
            <Subheader>Projects</Subheader>
            {
              this.props.projects.map(project =>
                <ListItem key={project.get("id")} value={project.get("id")}>{project.get("name")}</ListItem>
              )
            }
            <div style={{width: "100%"}}>
              <div style={{margin: "0 auto", width: "50%"}}>
                <FlatButton label="Add Project" primary={true} onTouchTap={this.handleOpen}/>
              </div>
            </div>
          </SelectableList>
        </Drawer>
        <Dialog title="Add New Project" modal={false} actions={dialogActions} open={this.state.dialogOpen} onRequestClose={this.handleClose}>
          <TextField
            ref={input => {if (input) input.focus();}}
            style={{width: "100%"}}
            hintText="Project Name"
            value={this.state.dialogText}
            onKeyDown={e => { if (e.keyCode === ENTER_KEY_CODE) this.addNewProject(); } }
            onChange={e => { this.setState({dialogText: e.target.value}); }} />
        </Dialog>
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.instanceOf(ImmList).isRequired,
  onAddProject: PropTypes.func.isRequired,
  selectedProject: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  let bState = state.base;
  return {
    projects: bState.get("projects").map(id => bState.getIn(["projectsById", `${id}`])),
    selectedProject: bState.getIn(["ui", "selectedProject"])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProject: (name) => {
      dispatch(addProject(name));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
