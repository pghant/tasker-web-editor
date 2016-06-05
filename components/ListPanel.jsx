import React, { PropTypes, Component } from "react";
import Paper from "material-ui/Paper";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import AddIcon from "material-ui/svg-icons/content/add";
import IconButton from "material-ui/IconButton";
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
          <ToolbarGroup>
            <ToolbarTitle text={this.props.listTitle} />
          </ToolbarGroup>
          <ToolbarGroup style={{flexDirection: "column", justifyContent: "center"}}>
            <IconButton tooltip={`Add ${this.props.listTitle.slice(0, -1)}`}><AddIcon /></IconButton>
          </ToolbarGroup>
        </Toolbar>
        <List>
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
