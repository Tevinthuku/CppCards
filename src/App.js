import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Headroom from 'react-headroom';
// the css file
import './App.css';

// the code Cards
import Introduction from './codecards/introduction';
import Arrays from './codecards/Arrays';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      appstate: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleArrayslink = this.handleArrayslink.bind(this);
    this.handleIntroductionlink = this.handleIntroductionlink.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  handleArrayslink(value) {
    this.setState({
      slideIndex: 1,
    });
  };

  handleIntroductionlink(value) {
    this.setState({
      slideIndex:0,
    })
  }



  render() {

    // the menu icons
    const menuicons = this.state.appstate
    ? (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
       >
        <MenuItem
          onTouchTap={this.handleIntroductionlink}
          primaryText="Introduction"
        />
        <MenuItem
          onTouchTap={this.handleArrayslink}
          primaryText="Arrays"
        />
      </IconMenu>
    )
    : '';


    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <section>
            <section>
              <Headroom>
                <AppBar
                  title="Cpp Cards"
                  showMenuIconButton={false}
                  iconElementRight={menuicons}
                />
              </Headroom>
            </section>
            <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
              >
                <div>
                  <Introduction />
                </div>
                <div>
                  <Arrays />
                </div>
            </SwipeableViews>
          </section>
        </MuiThemeProvider>
      </div>
    )
  }
}
