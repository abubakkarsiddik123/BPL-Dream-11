import React, { use } from 'react';

const Player = ({playersPromise}) => {
    const data = use(playersPromise)
    console.log(data);
    // console.log(playersPromise);
    return (
        <div>
            <p>player{data.length} </p>
        </div>
    );
};

export default Player;