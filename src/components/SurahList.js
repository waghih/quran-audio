import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Container } from 'reactstrap';
import Duration from './Duration';
import SurahName from './SurahName';
import AudioPlayer from './MediaPlayer/AudioPlayer';
import '../App.css';

class SurahList extends Component {

  state = {
    surahs: [],
    qari: [],
    currentSurah: [],
    currentQari: []
  }

  componentWillMount() {
    this.getDefaultQari();
    this.getSurahsList();
  }

  componentDidMount() {
    this.forceUpdate();
  }

  getDefaultQari() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const QARI_URL = 'https://quranicaudio.com/api/qaris/65/audio_files';
    console.log("Fetching data...");
    fetch(proxyUrl + QARI_URL)
    .then(response => response.json())
      .then(data => {
        this.setState({ qari: data });
        this.setState({ currentQari: data[0] })
      });
  }

  getSurahsList() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const SURAH_URL = 'https://quranicaudio.com/api/surahs';
    console.log("Fetching data...");
    fetch(proxyUrl + SURAH_URL)
    .then(response => response.json())
      .then(data => {
        this.setState({ surahs: data });
        this.setState({ currentSurah: data[0]})
        console.log(this.state.currentSurah);
      });
  }

  renderSurahList() {
    return this.state.qari.map((surah) => 
      <ListGroupItem key={surah.surah_id}>
        <Row className="w-100">
          <Col xs="1" className="pr-0 text-left font-weight-bold">{surah.surah_id}.</Col>
          <Col xs="9" className="text-left pl-0">
            <SurahName surah={this.state.surahs[surah.surah_id-1]}/>
          </Col>
          <Col xs="2" className="text-right pr-0">
            <Duration duration={surah.format.duration} />
          </Col>
        </Row>       
      </ListGroupItem>
    );
  }

  renderAudio() {
    console.log(this.state.currentSurah);
    console.log(this.state.currentQari)
    return (
      <AudioPlayer 
        currentSurah={this.state.currentSurah}
        currentQari={this.state.currentQari}
      />
    );
  }

  render() {
    return (
      <div>
        <Container>
          <ListGroup>
            {this.renderSurahList()}
          </ListGroup>
        </Container>
        {this.renderAudio()}
      </div>
      
    );
  }
}

export default SurahList;
