import axios from "axios";

export const getBucketSongs = async() => {
    const res = await axios.post("https://k7l85e2xf3.execute-api.ap-south-1.amazonaws.com/UAT/music-player-backend",{
        command:"LIST"
    });

    if(res.status!=200){
        throw new Error("Unable to fetch bucket objects");
    }

    const data = await res.data;
    return data;
}

export const generatePresignedUrl = async (key:string) => {
    const res = await axios.post("https://k7l85e2xf3.execute-api.ap-south-1.amazonaws.com/UAT/music-player-backend",{
        command:"PRESIGNED_URL",
        key:key
    });

    if(res.status!=200){
        throw new Error("Unable to generate presigned Url");
    }

    const data = await res.data;

    return data;


}