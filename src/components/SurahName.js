import React from 'react';

const SurahName = ({ surah }) => {
    console.log(surah);

    const {
        name
    } = surah;

    return (
        <div>Surah {name.simple}</div>
    );

};

export default SurahName;