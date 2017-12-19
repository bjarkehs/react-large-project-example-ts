import * as React from 'react';

import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from 'material-ui';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

interface OwnProps {}

type ClassNames = keyof typeof styles;

class NavigationBar extends React.Component<OwnProps & WithStyles<ClassNames>> {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            type="title"
            color="inherit"
            className={this.props.classes.flex}
          >
            Title
          </Typography>
          <Menu>
            <MenuItem>Users</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavigationBar);
