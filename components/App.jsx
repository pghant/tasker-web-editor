import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import ProjectList from "../containers/ProjectList";
import * as BaseActions from "../actions/base";

const App = () => (
  <div>
    <AppBar title="Tasker Web Editor" showMenuIconButton={false} />
    <ProjectList />
  </div>
)

export default App;
