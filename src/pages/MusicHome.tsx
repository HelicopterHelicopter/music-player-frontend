import {  useState } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface Song {
    title:string;
    url:string;
}


const MusicHome = () => {

   const [trackIndex,setTrackIndex] = useState(0);
   const [songs,setSongs]= useState<Song[]>([]);
   const [song,setSong] = useState<Song>();

    const handleTrackEnd = () => {
        console.log(trackIndex);
        console.log(setSongs);
        console.log(setSong);
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