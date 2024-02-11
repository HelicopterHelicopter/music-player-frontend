import ReactPlayer from "react-player";

const YoutubePlayer = () => {
    return(
        <div>
            <ReactPlayer url="http://13.127.64.232:5000/api/v1/yt/play?url=https://www.youtube.com/watch?v=oMZHqoZojZ0WKWDng2H3tc"/>
        </div>
    );
}

export default YoutubePlayer;