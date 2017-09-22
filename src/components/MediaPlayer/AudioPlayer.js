import React, { Component } from 'react';

class AudioPlayer extends Component{

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="audio-container">
                Play
            </div>
        );
    }

};

export default AudioPlayer;