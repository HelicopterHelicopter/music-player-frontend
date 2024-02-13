import { useState } from "react";
import ReactPlayer from "react-player";
import { getYtPresignedUrl, searchYT } from "../utils/api-communicator";

const YoutubePlayer = () => {

    //const [videoId,setVideoId] = useState<string>("");
    //const [videoUrl,setVideoUrl] = useState<string>("");
    const [searchKeyword,setSearchKeyword] = useState<string>("");
    const [results,setSearchResults] = useState<any[]>([]);

    // const onVideoIdSubmit = async()=>{
    //     const url = await getYtPresignedUrl(videoId);
    //     if(url.message==="OK"){
    //         setVideoUrl(url.body);
    //     }
    // }

    // const onVideoIdSubmit2 = () => {
    //     window.open(`music.jheel.org:5000/api/v1/yt/play?videoid=${videoId}`);
    // }

    const onSearchClick =async () => {
        const data =  await searchYT(searchKeyword);
        if(data.message==="OK"){
            setSearchResults(data.data);
        }
    }
    return(
        <div>
            <label htmlFor="keyword">Search:</label>
            <input type="text" onChange={(e)=>setSearchKeyword(e.target.value)} name="keyword" id="keyword"/>
            <button type="button" onClick={onSearchClick}>Submit</button>
            <table className="table">
                <thead>
                    <th>Title</th>
                    <th>URL</th>
                </thead>
                <tbody>
                    {results.map((result)=>(
                        <tr>
                            <td>{result.title}</td>
                            <td>{result.url}</td>
                        </tr>
                        
                        
                    ))}
                </tbody>
            </table>
            <h4>For now copy paste this URL in postman until we find a better solution</h4>
        </div>
    );
}

export default YoutubePlayer;