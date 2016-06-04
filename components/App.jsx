import React from "react";
import AppBar from "material-ui/AppBar";
import ProjectList from "../containers/ProjectList";
import ProfilePanel from "../containers/ProfilePanel";

const App = () => (
  <div>
    <AppBar title="Tasker Web Editor" showMenuIconButton={false} />
    <div className="body" style={{position: "fixed", top: 65, bottom: 0, left: 0, right: 0}}>
      <ProjectList />
      <div className="main" style={{position: "absolute", left: 256, right: 0}}>
        <ProfilePanel />
      </div>
    </div>
  </div>
)

export default App;
