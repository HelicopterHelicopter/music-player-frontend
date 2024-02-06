import H5AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';


const MusicPlayer = (props:any) => {
    return (
        <div className="flex">
            <H5AudioPlayer className="w-full"
                src={props.url}
                header={props.title}
            />
        </div>
    );
}
export default MusicPlayer;