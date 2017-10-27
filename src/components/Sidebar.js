import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import { PROXY_URL } from '../constants';
import { connect } from 'react-redux';
import { loadReciters } from '../actions';

const Menu = BurgerMenu['slide'];

class Sidebar extends Component {
  componentWillMount() {
    this.loadQaris();
  }

  loadQaris() {
    const QARI_URL = 'https://quranicaudio.com/api/qaris';
    console.log("Fetching data...");
    fetch(PROXY_URL + QARI_URL)
    .then(response => response.json())
      .then(data => {
        this.props.loadReciters(data);
      });
  }

  renderReciters() {
    return this.props.reciters.map(reciter => 
      <p>{reciter.name}</p>
    )
  }

  render() {
    return (
      <Menu
        width={'25%'}
        styles={styles} 
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }>
        <div>
          {this.renderReciters()}
        </div>
      </Menu>
    );
  }
}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#f9f9f9',
    color: '#333',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  bmMenuWrap: {
    bottom: 0,
    left: 0
  }
}

function mapStateToProps(state) {
  return {
    reciters: state.reciters
  }
}

export default connect(mapStateToProps, {
  loadReciters
})(Sidebar);
