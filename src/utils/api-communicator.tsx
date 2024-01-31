import axios from "axios";

export const getBucketSongs = async() => {
    const res = await axios.get("/awsS3/Bucket");

    if(res.status!=200){
        throw new Error("Unable to fetch bucket objects");
    }

    const data = await res.data;
    return data;
}

export const generatePresignedUrl = async (key:string) => {
    const res = await axios.post("/awsS3/GetSignedUrl",{
        key:key
    });

    if(res.status!=200){
        throw new Error("Unable to generate presigned Url");
    }

    const data = await res.data;

    return data;


}