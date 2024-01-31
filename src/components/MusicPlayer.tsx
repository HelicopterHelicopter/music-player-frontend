import H5AudioPlayer from "react-h5-audio-player";


const MusicPlayer = (props:any) => {
    return (
        <div className="flex">
            <H5AudioPlayer
                src={props.url}
                header={props.title}
            />
        </div>
    );
}
export default MusicPlayer;