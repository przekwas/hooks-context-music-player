import React from 'react';
import useMusicPlayer from '../utils/useMusicPlayer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const TrackList = () => {

    const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

    return (
        <>
            {trackList.map((track, i) => (
                <div key={i} className="box is-flex">
                    <button className="button" onClick={() => playTrack(i)}>
                        {currentTrackName === track.name && isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                    </button>
                    <div style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                        {track.name}
                    </div>
                </div>
            ))}
        </>
    );
}

export default TrackList;