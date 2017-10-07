import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Container } from 'reactstrap';
import Duration from './Duration';
import SurahName from './SurahName';
import { connect } from 'react-redux';
import { setSelectedAudioIndex, updateAudio, playAudio } from '../actions';
import '../App.css';

class SurahList extends Component {

  handleTrackSelection(file, i) {
    console.log(this);
    if(this.props.audioplayer.playing) {
      this.props.setSelectedAudioIndex(file, i);
      this.props.updateAudio(this.props.audioplayer.audio, file, this.props.qari.relative_path);
    } else {
      this.props.setSelectedAudioIndex(file, i);
    }
  }

  renderSurahList() {
    return this.props.files.map((file, i) => 
      <ListGroupItem className="list-group-item-custom mb-0 p-4" key={file.surah_id} onClick={() => this.handleTrackSelection(file, i)}>
        <Row className="w-100">
          <Col xs="2" sm="1" className="pr-0 text-left font-weight-bold">{file.surah_id}.</Col>
          <Col xs="7" sm="9" className="text-left pl-0">
            <SurahName 
              chapter={file}
              displayFor='list'
            />
          </Col>
          <Col xs="3" sm="2" className="text-right pr-0">
            <Duration duration={file.format.duration} />
          </Col>
        </Row>       
      </ListGroupItem>
    );
  }

  render() {
    return (
      <div>
        <Container>
          <ListGroup className="pb-10 border rounded">
            {this.renderSurahList()}
          </ListGroup>
        </Container>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters,
    files: state.audio_files,
    qari: state.qari,
    selectedIndex: state.selectedIndex,
    audioplayer: state.audioplayer
  }
}

export default connect(mapStateToProps, { 
  setSelectedAudioIndex,
  playAudio,
  updateAudio 
})(SurahList);
