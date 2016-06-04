import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import ProjectList from "../containers/ProjectList";
import ProfilePanel from "../containers/ProfilePanel";

const App = () => (
  <div>
    <AppBar title="Tasker Web Editor" showMenuIconButton={false} />
    <div className="body" style={{position: "fixed", top: 65, bottom: 0, left: 0}}>
      <ProjectList />
      <ProfilePanel />
    </div>
    {/* <div style={{marginLeft: 300, width: 900}}>
     </div>*/}
  </div>
)

export default App;
