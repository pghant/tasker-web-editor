import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import ListPanel from "../components/ListPanel";
import { List as ImmList, Map } from "immutable";
import { addProfile } from "../actions/base";

class ProfilePanel extends Component {
  render() {
    return <ListPanel listItems={this.props.profiles} listTitle="Profiles" emptyMessage="No profiles added" />;
  }
}

ProfilePanel.propTypes = {
  profiles: PropTypes.instanceOf(ImmList).isRequired,
  onAddProfile: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  let bState = state.base;
  return {
    profiles: bState.get("profiles").map(id => bState.getIn(["profilesById", `${id}`]))
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
