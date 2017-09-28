import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';   
import { setSelectedAudioIndex, playAudio } from '../../actions';
import { AUDIO_URL } from '../../constants';

class AudioPlayer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            resume: false,
            file: {}
        }
    }

    componentWillMount() {
        console.log("audio", this.props)
    }

    handleButtonPlay() {
        this.setState({ isPlaying: true });
        this.props.playAudio(this.props.selectedIndex, this.props.qari.relative_path)
        // let file = new Audio(`${AUDIO_URL}/${this.props.qari.relative_path}${this.props.selectedIndex.data.file_name}`)
        // console.log(file);
        console.log("Playing...");
    }

    handleButtonPause() {
        this.setState({ isPlaying: false });
        console.log("Pausing...");
    }

    handleButtonSkipNext() {
        console.log("Skipping Next...");
    }

    handleButtonSkipPrevious() {
        console.log("Skipping Previous...");
    }

    renderPlayState() {
        if(this.state.isPlaying) {
            return (
                <FontAwesome 
                    className="mx-5"
                    name='pause'
                    size='4x'
                    onClick={() => this.handleButtonPause()}
                />
            );
        } else {
            return (
                <FontAwesome 
                    className="mx-5"
                    name='play'
                    size='4x'
                    onClick={() => this.handleButtonPlay()}
                />
            );
        }
    }

    render() {
        return (
            <div className="audio-container py-4">
                <Row>
                    <Col xs='6' className="mx-auto col-6 d-flex justify-content-center align-items-center">
                        <FontAwesome 
                            name='step-backward'
                            size='2x'
                            onClick={() => this.handleButtonSkipPrevious()}
                        />
                        {this.renderPlayState()}
                        <FontAwesome 
                            name='step-forward'
                            size='2x'
                            onClick={() => this.handleButtonSkipNext()}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

};

function mapsStateToProps(state) {
    return {
        qari: state.qari,
        audio_files: state.audio_files,
        selectedIndex: state.selectedIndex
    }
}

export default connect (mapsStateToProps, { setSelectedAudioIndex, playAudio })(AudioPlayer);