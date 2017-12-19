import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import { WithStyles } from 'material-ui/styles/withStyles';

const styles = {
  root: {
    background: 'red'
  }
};

type ClassNames = keyof typeof styles;

interface OwnProps {
  displayText?: string;
}

class MyComponent extends React.Component<OwnProps & WithStyles<ClassNames>> {
  public static defaultProps: Partial<OwnProps> = {
    displayText: 'Nissehue'
  };

  render() {
    return <div className={this.props.classes.root}>Red {this.props.displayText}</div>;
  }
}

export default withStyles(styles)<OwnProps>(MyComponent);
