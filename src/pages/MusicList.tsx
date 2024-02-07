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
    const [currentIndex,setCurrentIndex] = useState<number>(0);

    useEffect(()=>{
        const getSongs = async () => {
            const data = await getBucketSongs();
            if(data.message==="OK"){
                setSongs(data.objects);
            }
        }
        getSongs();
    },[]);

    const handleRowClick = async (key:string,index:number) => {
        setCurrentIndex(index);
        const data = await generatePresignedUrl(key);

        if(data.message==="OK"){
            console.log(data.url);
            setCurrentSong({
                title:data.key,
                url:data.url
            });
        }
    }

    const handleSongEnd = async()=>{
        setCurrentIndex(((currentIndex+1)%songs.length));
        console.log(currentIndex);
        const nextSong = songs[currentIndex];
        const data = await generatePresignedUrl(nextSong.Key);

        if(data.message==="OK"){
            setCurrentSong({
                title : data.key,
                url:data.url
            });
        }
    }

    return(
        <div className="grid w-100 items-center">
            <div className="flex">
            <div className="flex">
                <MusicPlayer songEndHandler={handleSongEnd} url={currentSong?.url} title={currentSong?.title}/>
            </div>
            <div className="w-20">
                <BuyMeCoffee/>
            </div>
            
            </div>
            
            
            <table className="table-auto border border-slate-500 border-collapse">
                <thead>
                    <tr>
                        <th className="border border-slate-600">Song</th>
                    </tr>
                </thead>
                <tbody>
                
                        {songs.map((song,index)=>(
                            <tr key={song.title} >
                                <td onDoubleClick={()=>handleRowClick(song.Key,index)} className="border border-slate-700" key={song.ETag}> {song.Key} </td>                               
                            </tr>
                            
                        ))}
                                   
                </tbody>
            </table>

            
            
        </div>
    );
}

export default MusicList;