import React, { Component } from 'react';
import { connect } from 'react-redux';


class SurahName extends Component {

    getSurahNameById() {
        let surah_name = '';
        let english_name = '';
        let { surah_id } = this.props.chapter;
        this.props.chapters.forEach(chapter => {
            if(surah_id === chapter.id) {
                surah_name = chapter.name.simple;
                english_name = chapter.name.english;
            }
        })
        switch(this.props.displayFor){
            case 'list': {
                return (
                    <div>Surah {`${surah_name} - (${english_name})`}</div>
                );
            }
            case 'audio': {
                const { name } = this.props.qari;
                return (
                    <div className="text-md-left d-block pl-4">
                        <h5 className="mb-1">Imam {name}</h5>
                        <p className="mb-sm-2 mb-md-0">Surah {`${surah_name} - (${english_name})`}</p>
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
        chapters: state.chapters,
        qari: state.qari
    }
}

export default connect(mapStateToProps, null)(SurahName);