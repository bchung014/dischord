import React from 'react';
import ServersNav from '../servers_nav/servers_nav_container';
import Menu from '../menu/menu';

import ChatRoom from "../chat_room/chat_room";

export default class Servers extends React.Component {

  render() {
    return (
      <div className='servers-container'>
        <div className='servers-main-nav-container'>
          <ServersNav />
        </div>

        <div className='servers-menu-container'>
          <Menu />
        </div>
        
        <div className='servers-content-container'>

          {/* dont render these components for @me */}
          <ChatRoom />
          {/* replace this with an actaul mebmers menu component */}
          <div className='members-menu'>yer boys</div>
        </div>
      </div>
    );
  }
}