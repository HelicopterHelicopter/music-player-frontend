import { useEffect, useState } from "react";
import { generatePresignedUrl, getBucketSongs } from "../utils/api-communicator";
import MusicPlayer from "../components/MusicPlayer";
import IndigoButton from "../components/IndigoButton";
import BuyMeCoffee from "../components/BuyMeCoffee";


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
        <div className="grid w-100 items-center">
            <div className="flex">
            <div className="flex">
                <MusicPlayer url={currentSong?.url} title={currentSong?.title}/>
            </div>
            <div className="w-20">
                <BuyMeCoffee/>
            </div>
            
            </div>
            
            
            <table className="border-collapse border">
                <thead>
                    <tr>
                        <th className="border">Song</th>
                    </tr>
                </thead>
                <tbody>
                
                        {songs.map((song)=>(
                            <tr key={song.title} >
                                <td onDoubleClick={()=>handleRowClick(song.Key)} className="border" key={song.ETag}>{song.Key}</td>
                                <td className="border"><IndigoButton onClick={()=>handleRowClick(song.key)} type="button">Play</IndigoButton></td>
                            </tr>
                            
                        ))}
                                   
                </tbody>
            </table>

            
            
        </div>
    );
}

export default MusicList;