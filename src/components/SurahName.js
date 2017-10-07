import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurahName extends Component {

    getSurahNameById() {
        let name = '';
        let english_name = '';
        let { surah_id } = this.props.chapter;
        this.props.chapters.forEach(chapter => {
            if(surah_id === chapter.id) {
                name = chapter.name.simple;
                english_name = chapter.name.english;
            }
        })
        switch(this.props.displayFor){
            case 'list': {
                return (
                    <div>Surah {`${name} - (${english_name})`}</div>
                );
            }
            case 'audio': {
                return (
                    <div className="text-left d-block pl-4">
                        <h4>Surah {name}</h4>
                        <p>{english_name}</p>
                    </div>
                );
            }
            default: 
                return <div></div>;
        }
    }

    render() {
        return (
            <div>{this.getSurahNameById()}</div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        chapters: state.chapters
    }
}

export default connect(mapStateToProps, null)(SurahName);