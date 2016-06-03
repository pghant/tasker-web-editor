import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import { List, ListItem } from "material-ui/List";
import { List as ImmList, Map } from "immutable";
import { addProfile } from "../actions/base";

class ProfilePanel extends Component {
  render() {
    return (
      <List>
        <Subheader>Profiles</Subheader>
        {
          if (this.props.profiles.count() > 0) {
            this.props.profiles.map(profile =>
              <ListItem key={profile.get("id")}>{profile.get("name")}</ListItem>
            )
          } else {
            <div>No profiles added</div>
          }
        }
      </List>
    );
  }
}

ProfilePanel.propTypes = {
  profiles: PropTypes.instanceOf(List).isRequired,
  onAddProfile: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  let bState = state.base;
  return {
    projects: bState.get("profiles").map(id => bState.getIn(["profilesById", `${id}`]))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProfile: (name) => {
      dispatch(addProfile(name));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePanel);
