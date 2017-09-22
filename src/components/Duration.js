import React from 'react';
import formatSeconds from '../utils/formatSeconds';

const Duration = ({ duration }) => {
    return (
        <div>{formatSeconds(duration)}</div>
    )
}

export default Duration;