import { useEffect, useState } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AWS from 'aws-sdk';

interface Song {
    title:string;
    url:string;
}

type MusicHomeProps = {
    songTitle:string,
    url:string
}

const MusicHome = () => {

   const [trackIndex,setTrackIndex] = useState(0);
   const [songs,setSongs]= useState<Song[]>([]);
   const [song,setSong] = useState<Song>();

    const handleTrackEnd = () => {
        setTrackIndex((prevIndex)=>(prevIndex+1)%songs.length);
    }

    return (
        <div className="flex">
            <h1>Music Player</h1>
            {songs.length>0&& (
                <H5AudioPlayer
                autoPlay
                src={song?.url}
                onEnded={handleTrackEnd}
                header={song?.title}
            />
            )}
            
        </div>
    );
}

export default MusicHome;