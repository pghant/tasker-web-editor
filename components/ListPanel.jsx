import React, { PropTypes, Component } from "react";
import Paper from "material-ui/Paper";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import { List, ListItem } from "material-ui/List";
import { List as ImmList, Map } from "immutable";

class ListPanel extends Component {
  render() {
    let message;
    if (this.props.listItems.count() > 0) {
      message = this.props.listItems.map(item => <ListItem key={item.get("id")}>{item.get("name")}</ListItem>);
    } else {
      message = <span style={{fontSize: "1.2em", display: "block"}}>{this.props.emptyMessage}</span>;
    }
    let paperStyle = {
      width: "50%",
      margin: 28,
      height: "100%",
      display: "block"
    };
    return (
      <Paper style={paperStyle}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text={this.props.listTitle} />
          </ToolbarGroup>
        </Toolbar>
        <List>
          <span style={{paddingBottom: 10, fontSize: "1.5em", display: "block"}}>{this.props.listTitle}</span>
          {message}
        </List>
      </Paper>
    );
  }
}

ListPanel.propTypes = {
  listItems: PropTypes.instanceOf(ImmList).isRequired,
  listTitle: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string.isRequired
};

export default ListPanel;
