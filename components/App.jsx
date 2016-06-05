import React, { PropTypes } from "react";
import AppBar from "material-ui/AppBar";
import muiThemeable from "material-ui/styles/muiThemeable";
import ProjectList from "../containers/ProjectList";
import ProfilePanel from "../containers/ProfilePanel";
import TaskPanel from "../containers/TaskPanel";

const App = ({muiTheme}) => (
  <div>
    <AppBar title="Tasker Web Editor" showMenuIconButton={false} />
    <div className="body" style={{position: "fixed", top: muiTheme.appBar.height, bottom: 0, left: 0, right: 0}}>
      <ProjectList />
      <div className="main" style={{position: "absolute", left: muiTheme.drawer.width, right: 0}}>
        <ProfilePanel />
        <TaskPanel />
      </div>
    </div>
  </div>
)

App.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default muiThemeable()(App);
