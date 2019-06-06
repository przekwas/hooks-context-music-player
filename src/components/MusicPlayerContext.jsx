import React, { useState } from 'react';

import CreativeMinds from '../bensound-creativeminds.mp3';
import GoingHigher from '../bensound-goinghigher.mp3';
import HappyRock from '../bensound-happyrock.mp3';

const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = props => {

    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: 'The Strain - Blockhead',
                file: CreativeMinds
            },
            {
                name: 'To the Grove - Ljones',
                file: GoingHigher
            },
            {
                name: 'Nujabes - Madwreck',
                file: HappyRock
            },
        ],
        currentTrackIndex: null,
        isPlaying: false,
    });

    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
}

export { MusicPlayerContext, MusicPlayerProvider };