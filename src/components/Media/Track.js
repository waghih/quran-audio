import React, { Component } from 'react';
import { connect } from 'react-redux';
import formatSeconds from '../../utils/formatSeconds';
import './Track.css';

class Track extends Component {

    state = {
        progress: 0,
        currentTime: '',
        duration: ''
    }

    componentDidUpdate() {
        const { audio } = this.props.audioplayer;
        if(audio) {
            audio.onloadeddata = () => {
                console.log("Audio loaded");
                this.setState({ duration: formatSeconds(audio.duration) })
            }
            audio.ontimeupdate = () => {
                this.setCurrentProgress(audio);
                this.displayCurrentTime(audio);
            }
        }
    }

    setCurrentProgress(audio) {
        let time_progress = (audio.currentTime / audio.duration) * 100;
        this.setState({ progress: time_progress.toFixed(1) })
    }

    seekTrackChange(event) {
        const { audio } = this.props.audioplayer;
        if (audio) {
            let new_time = ( event.target.value * audio.duration ) / 100;
            audio.currentTime = new_time
            this.setState({ progress: event.target.value });
            this.setState({ currentTime: formatSeconds(new_time) });
        }
    }

    calculateTrack() {
        const { audio } = this.props.audioplayer;
        if(audio) {
            return {
                'backgroundSize': `${this.state.progress}% 100%`
            }
        } else {
            return {
                'backgroundSize': '0% 100%'
            }
        }
    }

    calculateProgress() {
        const { started } = this.props.audioplayer
        if(started) {
            return this.state.progress
        } else {
            return 0
        }
    }

    displayCurrentTime(audio) {
        let time = formatSeconds(audio.currentTime);
        this.setState({ currentTime: time });
    }

    render() {
        return(
            <div className="d-flex">
                <span>{this.state.currentTime}</span>
                <input
                    type="range"
                    style={this.calculateTrack()}
                    className="mx-3" 
                    min="0" 
                    max="100"
                    value={this.calculateProgress()}
                    onChange={(event) => this.seekTrackChange(event)}
                />
                <span>{this.state.duration}</span>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        audioplayer: state.audioplayer
    }
}

export default connect(mapStateToProps, null)(Track);