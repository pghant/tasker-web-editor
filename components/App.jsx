import React, { PropTypes, Component } from "react";
import AppBar from "material-ui/AppBar";
import muiThemeable from "material-ui/styles/muiThemeable";
import ProjectList from "../containers/ProjectList";
import ProfilePanel from "../containers/ProfilePanel";
import TaskPanel from "../containers/TaskPanel";

class App extends Component {
  state = {
    mainHeight: 200
  }

  componentDidMount() {
    // TODO: update height on window resize
    this.setState({ mainHeight: this.refs.main.offsetHeight })
  }

  render() {
    const { muiTheme } = this.props;
    return (
      <div>
        <AppBar title="Tasker Web Editor" showMenuIconButton={false} />
        <div className="body" style={{position: "fixed", top: muiTheme.appBar.height, bottom: 0, left: 0, right: 0}}>
          <ProjectList />
          <div className="main" ref="main" style={{position: "absolute", left: muiTheme.drawer.width, right: 0, bottom: 0, top: 0}}>
            <ProfilePanel style={{maxHeight: this.state.mainHeight / 2.4}} />
            <TaskPanel style={{maxHeight: this.state.mainHeight / 2.4}} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default muiThemeable()(App);
