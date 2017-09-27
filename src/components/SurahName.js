import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurahName extends Component {

    getSurahNameById() {
        let name = ''
        let { surah_id } = this.props.chapter;
        this.props.chapters.forEach(chapter => {
            if(surah_id === chapter.id) {
                name = chapter.name.simple;
            }
        })
        return name;
    }

    render() {
        return (
            <div>Surah {this.getSurahNameById()}</div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        chapters: state.chapters
    }
}

export default connect(mapStateToProps, null)(SurahName);