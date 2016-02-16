import React, {PropTypes, Component } from 'react';

import styles from "./index.css"

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';


import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

import {Link, IndexLink} from 'react-router'

export default class HeaderNav extends Component {

    state = {
        open: false
    };

    handleToggle = () =>{
      this.setState({open: !this.state.open});
    };

    render() {

      return (
        <div>
          <AppBar
            title="React playlist Viewer"
            iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationMenu /></IconButton>} />
            <LeftNav
                open={this.state.open}
                onRequestChange={(open) => {}}>
                    <AppBar
                        title="Menu"
                        iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationClose /></IconButton>}	/>
                    <IndexLink to="/home" activeClass="active" className="link">
                        <MenuItem onClick={this.handleToggle}>Home</MenuItem>
                    </IndexLink>
                    <IndexLink to="/discover" activeClass="active" className="link">
                        <MenuItem onClick={this.handleToggle}>Discover</MenuItem>
                    </IndexLink>
          </LeftNav>
        </div>)

    }
}
