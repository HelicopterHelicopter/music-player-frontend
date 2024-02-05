import { useState } from "react";
import IndigoButton from "../components/IndigoButton";

const RequestSong = () => {
    const SubmitRequest = (e:any) => {
        e.preventDefault();
        console.log("Request submitted");
        console.log(songName);
        setSongName("");
    }

    const [songName,setSongName] = useState<string>("");
    return (
        <div className="flex w-100">
            <form onSubmit={SubmitRequest}>
                <div className="sm:col-span-3">
                    <label htmlFor="song-name" className="block text-sm font-medium leading-6 text-gray-900">Song Name: </label>
                    <input type="text" onChange={(e)=>setSongName(e.target.value)} name="song-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <IndigoButton type="submit"/>
            </form>
        </div>
    );
}

export default RequestSong;