import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import VideoPlatform from './VideoPlatform';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'



const options = [
  'Robot',
    'YouTube',
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {


  state = {
    anchorEl: null,
      location:null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  Selection = key => event => {

    this.setState({location:key})
    console.log(this.state.location)

  };




  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>

        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          color = "inherit"
          variant = "contained"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem component={Link} to="/Yusuf">
            Highway
          </MenuItem>
          <MenuItem>
            CyberSecurity
          </MenuItem>
          <MenuItem>
            Machine Learning
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LongMenu;