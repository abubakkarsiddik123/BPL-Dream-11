import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Player = ({playersPromise}) => {
    const players = use(playersPromise)
    console.log(players);
    // console.log(playersPromise);
    return (
        <div className='container mx-auto'>
            <p>player{players.length} </p>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Player;