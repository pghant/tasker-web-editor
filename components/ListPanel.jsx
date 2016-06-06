import React, { PropTypes, Component } from "react";
import Paper from "material-ui/Paper";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import AddIcon from "material-ui/svg-icons/content/add";
import IconButton from "material-ui/IconButton";
import { List, ListItem } from "material-ui/List";
import muiThemeable from "material-ui/styles/muiThemeable";
import { List as ImmList, Map } from "immutable";

class ListPanel extends Component {
  render() {
    let message;
    const { listTitle, addItem, listItems, emptyMessage, style, containerStyle, muiTheme } = this.props;
    if (listItems.count() > 0) {
      message = listItems.map(item => <ListItem key={item.get("id")}>{item.get("name")}</ListItem>);
    } else {
      message = <span style={{fontSize: "1.2em", display: "block", marginLeft: 24}}>{emptyMessage}</span>;
    }
    let paperStyle = {
      width: "50%",
      margin: 28,
      display: "block"
    };
    let listStyle = {
      overflowY: "scroll",
      maxHeight: containerStyle ? containerStyle.maxHeight - muiTheme.toolbar.height : 400
    };
    return (
      <Paper style={Object.assign({}, paperStyle, containerStyle)}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text={listTitle} />
          </ToolbarGroup>
          <ToolbarGroup style={{flexDirection: "column", justifyContent: "center"}}>
            <IconButton
              tooltip={`Add ${listTitle.slice(0, -1)}`}
              onTouchTap={() => addItem("Test")}>
              <AddIcon />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
        <div style={Object.assign({}, listStyle, style)}>
          <List>
            {message}
          </List>
        </div>
      </Paper>
    );
  }
}

ListPanel.propTypes = {
  listItems: PropTypes.instanceOf(ImmList).isRequired,
  listTitle: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  style: PropTypes.object,
  containerStyle: PropTypes.object
};

export default muiThemeable()(ListPanel);
