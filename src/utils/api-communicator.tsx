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

export const getYtPresignedUrl = async (videoId:string) => {
    const res = await axios.get(`music.jheel.org:5000/api/v1/yt/getYtURL?videoId=${videoId}`);

    if(res.status!=200){
        throw new Error("Unable to get yt presigned URL");
    }

    const data = await res.data;
    return data;
}

export const searchYT = async (searchKeyword:string) => {
    const res = await axios.get(`https://gl5sbklz21.execute-api.ap-south-1.amazonaws.com/UAT/api/v1/yt/search?searchKeyword=${searchKeyword}`);

    if(res.status!=200){
        throw new Error("Unable to get search Results");
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