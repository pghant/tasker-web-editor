import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import { List, Map } from "immutable";
import { addProject } from "../actions/base";

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

  render() {
    const dialogActions = [
      <FlatButton label="Cancel" onTouchTap={this.handleClose} />,
      <FlatButton label="Add" onTouchTap={() => { this.props.onAddProject(this.state.dialogText); this.handleClose(); }} primary={true} />
    ];
    return (
      <div>
        <Drawer containerStyle={{marginTop: 65}}>
          <Subheader>Projects</Subheader>
          {
            this.props.projects.map(project =>
              <MenuItem key={project.get("id")}>{project.get("name")}</MenuItem>
            )
          }
          <div style={{width: "100%"}}>
            <div style={{margin: "0 auto", width: "50%"}}>
              <FlatButton label="Add Project" primary={true} onTouchTap={this.handleOpen}/>
            </div>
          </div>
        </Drawer>
        <Dialog title="Add New Project" modal={false} actions={dialogActions} open={this.state.dialogOpen} onRequestClose={this.handleClose}>
          <TextField hintText="Project Name" value={this.state.dialogText} onChange={(e) => { this.setState({dialogText: e.target.value}); }} />
        </Dialog>
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.instanceOf(List).isRequired,
  onAddProject: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  let bState = state.base;
  return {
    projects: bState.get("projects").map(id => bState.getIn(["projectsById", `${id}`]))
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
