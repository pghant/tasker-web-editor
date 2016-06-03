import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import ProjectList from "../containers/ProjectList";
import ProfilePanel from "../containers/ProfilePanel";
import * as BaseActions from "../actions/base";

const App = () => (
  <div>
    <AppBar title="Tasker Web Editor" showMenuIconButton={false} />
    <ProjectList />
    <div style={{marginLeft: 300, width: 900}}>
      <ProfilePanel />
    </div>
  </div>
)

export default App;
