import React, { PropTypes } from "react";
import { connect } from "react-redux";
import ListPanel from "../components/ListPanel";
import { List as ImmList, Map } from "immutable";
import { addProfile } from "../actions/base";

const ProfilePanel = ({ profiles, onAddProfile }) => (
  <ListPanel listItems={profiles} listTitle="Profiles" emptyMessage="No profiles added" addItem={onAddProfile} />
)

ProfilePanel.propTypes = {
  profiles: PropTypes.instanceOf(ImmList).isRequired,
  onAddProfile: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  let bState = state.base;
  let selectedProject = bState.getIn(["ui", "selectedProject"]);
  let pids = bState.getIn(["projectsById", `${selectedProject}`, "pids"]);
  return {
    profiles: pids.map(id => bState.getIn(["profilesById", `${id}`]))
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
