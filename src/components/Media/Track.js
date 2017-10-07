import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Track.css';

let interval;

class Track extends Component {

    state = {
        progress: 0
    }

    componentDidUpdate() {
        const { audio } = this.props.audioplayer;
        if(audio) {
            audio.ontimeupdate = () => {
                this.setCurrentProgress(audio);
            }
        }
    }

    setCurrentProgress(audio) {
        let time_progress = (audio.currentTime / audio.duration) * 100;
        this.setState({ progress: time_progress.toFixed(1) })
    }

    seek(e) {
        this.setState({ progress: e.target.value });
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

    setMaxDuration() {
        const { audio } = this.props.audioplayer;
        if(audio) {
            return audio.duration;
        } else {
            return 100;
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

    render() {
        return(
            <input
                type="range"
                style={this.calculateTrack()} 
                min="0" 
                max="100"
                value={this.calculateProgress()}
                onChange={(event) => this.seek(event)}
            />
        );
    }

}

function mapStateToProps(state) {
    return {
        audioplayer: state.audioplayer
    }
}

export default connect(mapStateToProps, null)(Track);