import React, { Component } from 'react';
import logo from './quran.svg';
import './App.css';
import SurahList from './components/SurahList';
import { Container } from 'reactstrap';
import { PROXY_URL } from './constants';
import { connect } from 'react-redux';
import { setChapters, setAudioFiles, setSelectedQari } from './actions';

class App extends Component {
  componentWillMount() {
    this.getDefaultQari();
    this.getSurahsList();
  }

  getDefaultQari() {
    const QARI_URL = 'https://quranicaudio.com/api/qaris/65';
    console.log("Fetching data...");
    fetch(PROXY_URL + QARI_URL)
    .then(response => response.json())
      .then(data => {
        this.props.setSelectedQari(data);
        this.getQariFiles();
      });
  }

  getQariFiles() {
    let qari_id = this.props.qari.id;
    const FILE_URL = `https://quranicaudio.com/api/qaris/${qari_id}/audio_files`;
    console.log("Fetching data...");
    fetch(PROXY_URL + FILE_URL)
    .then(response => response.json())
      .then(data => {
        this.props.setAudioFiles(data);
      });
  }

  getSurahsList() {
    const SURAH_URL = 'https://quranicaudio.com/api/surahs';
    console.log("Fetching data...");
    fetch(PROXY_URL + SURAH_URL)
    .then(response => response.json())
      .then(data => {
        this.props.setChapters(data);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="pt-3">MyQuran</h2>
        </div>
        <Container fluid className="mt-5 p-0">
          <SurahList />
        </Container>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    qari: state.qari
  }
}

export default connect(mapStateToProps, { 
  setChapters, 
  setAudioFiles, 
  setSelectedQari 
})(App);
