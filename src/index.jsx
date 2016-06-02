import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from "redux";
import { Provider } from "react-redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MyRawTheme from "../src/material_ui_raw_theme_file";

import App from "../components/App";
import configureStore from "../store/configureStore";

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
