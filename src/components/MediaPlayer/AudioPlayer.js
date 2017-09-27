import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Row, Col } from 'reactstrap';   

class AudioPlayer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            resume: false
        }
    }

    handleButtonPlay() {
        this.setState({ isPlaying: true });
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

export default AudioPlayer;