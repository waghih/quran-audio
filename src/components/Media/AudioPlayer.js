import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';   
import { 
    setSelectedAudioIndex,
    playAudio, 
    pauseAudio ,
    resumeAudio,
    updateAudio,
    audioFinish
} from '../../actions';
import SurahName from '../SurahName';
import Track from './Track';

class AudioPlayer extends Component{

    componentDidUpdate() {
        let { audio } = this.props.audioplayer;
        
        if(audio) {
            audio.onended = () => {
                this.props.audioFinish();
                this.handleButtonSkipNext();
            }
        }
    }

    handleButtonPlay() {
        if(this.props.audioplayer.started) {
            this.props.resumeAudio(this.props.audioplayer.audio);
        } else {
            this.props.playAudio(this.props.selectedIndex.data, this.props.qari.relative_path)
        }
        console.log("Playing...");
    }

    handleButtonPause() {
        this.props.pauseAudio(this.props.audioplayer.audio);
        console.log("Pausing...");
    }

    handleButtonSkipNext() {
        console.log("Skipping Next...");
        let new_index = this.props.selectedIndex.index + 1;
        if(new_index < this.props.audio_files.length) {
            let new_file = this.props.audio_files[new_index];
            this.props.setSelectedAudioIndex(new_file, new_index);
            this.updateAudioPlayer(new_file);
        }
    }
    
    handleButtonSkipPrevious() {
        console.log("Skipping Previous...");
        let new_index = this.props.selectedIndex.index - 1;
        if(new_index >= 0) {
            let new_file = this.props.audio_files[new_index];
            this.props.setSelectedAudioIndex(new_file, new_index);
            this.updateAudioPlayer(new_file);
        }
    }
    
    updateAudioPlayer(file) {
        let { audio } = this.props.audioplayer;
        let { relative_path } = this.props.qari;
        if (audio) {
            this.props.updateAudio(audio, file, relative_path);
        } else {
            this.props.playAudio(file, relative_path);
        }
    }
    
    renderPlayState() {
        if(this.props.audioplayer.playing) {
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

    getSurahName() {
        if(this.props.selectedIndex.length !== 0) {
            return (
                <SurahName 
                    chapter={this.props.selectedIndex.data}
                    displayFor='audio'
                />
            );
        }
    }

    render() {
        return (
            <div className="audio-container py-4">
                <Row>
                    <Col xs='12' sm='4'>
                        {this.getSurahName()}
                    </Col>
                    <Col xs='6' sm='4' className="d-flex justify-content-center align-items-center">
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
                <Row className="pt-4">
                    <Track />
                </Row>
            </div>
        );
    }

};

function mapsStateToProps(state) {
    return {
        qari: state.qari,
        audio_files: state.audio_files,
        selectedIndex: state.selectedIndex,
        audioplayer: state.audioplayer
    }
}

export default connect (mapsStateToProps, { 
    setSelectedAudioIndex, 
    playAudio,
    pauseAudio,
    resumeAudio,
    updateAudio,
    audioFinish
})(AudioPlayer);