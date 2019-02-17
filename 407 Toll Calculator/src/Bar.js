import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LongMenu from './Menu';
import ImageAvatars from './avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';




const NavBar = () => {


  return (
      <div>
        <AppBar position='static'>
          <Toolbar>

              <LongMenu/>

            <ImageAvatars/>
            <Typography variant="title" color="inherit" style={{flex: 1, marginRight: 1400}}>
              Highway 407 Toll Calculator
            </Typography>
            <Link to="/">
              <Button variant="contained" color="inherit">Home</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )


};

export default (NavBar);

