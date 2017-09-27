import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Container } from 'reactstrap';
import Duration from './Duration';
import SurahName from './SurahName';
import AudioPlayer from './MediaPlayer/AudioPlayer';
import { connect } from 'react-redux';
import '../App.css';

class SurahList extends Component {

  renderSurahList() {
    return this.props.files.map((file) => 
      <ListGroupItem key={file.surah_id}>
        <Row className="w-100">
          <Col xs="1" className="pr-0 text-left font-weight-bold">{file.surah_id}.</Col>
          <Col xs="9" className="text-left pl-0">
            <SurahName chapter={file}/>
          </Col>
          <Col xs="2" className="text-right pr-0">
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
          <ListGroup className="pb-10">
            {this.renderSurahList()}
          </ListGroup>
        </Container>
        <AudioPlayer />
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    chapters: state.chapters,
    files: state.audio_files
  }
}

export default connect(mapStateToProps, null)(SurahList);
