import React from 'react';
import RegisterPage from './RegisterPage';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Sign Up"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={450}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem><RegisterPage /> </MenuItem>

        </Drawer>
      </div>
    );
  }
}