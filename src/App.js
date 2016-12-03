import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Headroom from 'react-headroom';
// the css file
import './App.css';

// the code Cards
import Introduction from './codecards/introduction';
import Arrays from './codecards/Arrays';
import Pointers from './codecards/Pointers';
import Classesandobjects from './codecards/Classesandobjects';

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
    this.handlePointerslink = this.handlePointerslink.bind(this);
    this.handleClassesandObjectslink = this.handleClassesandObjectslink.bind(this);
  }

  // handle change of the SwipeableViews
  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  // classes and objects link
  handleClassesandObjectslink(value) {
    this.setState({
      slideIndex: 3,
    });
  };
  // pointers link
  handlePointerslink(value) {
    this.setState({
      slideIndex: 2,
    });
  };

// array link
  handleArrayslink(value) {
    this.setState({
      slideIndex: 1,
    });
  };

 // introduction link
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
        <MenuItem
          onTouchTap={this.handlePointerslink}
          primaryText="Pointers"
        />
        <MenuItem
          onTouchTap={this.handleClassesandObjectslink}
          primaryText="Classesandobjects"
        />
      </IconMenu>
    )
    : '';


    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <section>
            <section>
              <Headroom>
                <AppBar
                  zDepth={0}
                  title="Cpp Cards"
                  showMenuIconButton={false}
                  iconElementRight={menuicons}
                />
              </Headroom>
            </section>
            <div className="background-swipes">
              <SwipeableViews
                  index={this.state.slideIndex}
                  onChangeIndex={this.handleChange}
                >
                  {/* Introduction */}
                  <div>
                    <Introduction />
                  </div>
                  {/* arrays */}
                  <div>
                    <Arrays />
                  </div>
                  {/* pointers */}
                  <div>
                    <Pointers />
                  </div>
                  {/* classes and objects */}
                  <div>
                    <Classesandobjects />
                  </div>
              </SwipeableViews>
          </div>
          </section>
        </MuiThemeProvider>
      </div>
    )
  }
}
