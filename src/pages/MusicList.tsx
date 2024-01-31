import { useEffect, useState } from "react";
import { generatePresignedUrl, getBucketSongs } from "../utils/api-communicator";
import MusicPlayer from "../components/MusicPlayer";

interface Song {
    title:string;
    url:string;
}


const MusicList = () => {

    const [songs,setSongs] = useState<any[]>([]);
    const [currentSong,setCurrentSong] = useState<Song>();

    useEffect(()=>{
        const getSongs = async () => {
            const data = await getBucketSongs();
            if(data.message==="OK"){
                setSongs(data.objects);
            }
        }
        getSongs();
    },[]);

    const handleRowClick = async (key:string) => {
        const data = await generatePresignedUrl(key);

        if(data.message==="OK"){
            console.log(data.url);
            setCurrentSong({
                title:data.key,
                url:data.url
            });
        }
    }

    return(
        <div className="flex">
            <table className="border-collapse border">
                <thead>
                    <tr>
                        <th className="border">Song</th>
                    </tr>
                </thead>
                <tbody>
                
                        {songs.map((song)=>(
                            <tr key={song.title} onDoubleClick={()=>handleRowClick(song.Key)}>
                                <td className="border" key={song.ETag}>{song.Key}</td>
                            </tr>
                            
                        ))}
                                   
                </tbody>
            </table>
            <MusicPlayer url={currentSong?.url} title={currentSong?.title}/>
        </div>
    );
}

export default MusicList;