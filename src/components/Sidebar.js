import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import { PROXY_URL } from '../constants';
import { connect } from 'react-redux';
import { loadReciters } from '../actions';
import { ListGroup, ListGroupItem, Input } from "reactstrap";

const Menu = BurgerMenu['slide'];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    }
  }

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
    let filteredReciters = this.props.reciters.filter((reciter) => {
      return reciter.name.toLowerCase().indexOf(this.state.searchKey.toLocaleLowerCase()) !== -1;
    })
    return filteredReciters.map(reciter => 
      <ListGroupItem className="no-radius" key={reciter.id}>
        {reciter.name}
      </ListGroupItem>
    )
  }

  render() {
    return (
      <Menu
        styles={styles} 
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }>
        <div>
          <Input 
            className="input-search"
            placeholder="Type to filter reciter..."
            onChange={(event) => this.setState({ searchKey: event.target.value })}
          />
          <ListGroup>
            {this.renderReciters()}
          </ListGroup>
        </div>
      </Menu>
    );
  }
}

const styles = {
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
    color: '#b8b7ad'
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
