import { getToken } from "../auth";
import { myAxios, privateAxios } from "./helper"

export const getAllPlayList = async () =>{
    const res = await privateAxios.get('/api/getAllPlaylists');
    return res;
}

export const getPlaylistById = async (id) =>{
    const token = await getToken();
    if(token){
        const res = await privateAxios.get(`/api/getPlaylistForUser/${id}`);
        return res;
    } else {
        const res = await myAxios.get(`/api/getPlaylist/${id}`);
        return res;
    }
}

export const createEmptyPlaylist = async (body) => {
    const response = await getAllPlayList();
    const currentPlaylistName = body.playlistName;
    if(response){
        const allPlaylist = response.data?.data;
        if(Array.from(allPlaylist).some(item=>item.name.toLowerCase()===currentPlaylistName.toLowerCase())){
            return false;
        }
    }
    const res = await privateAxios.post('/api/createEmptyPlaylist', body);
    return res;
}

export const searchMovie = async (movieName)=>{
    const res = await privateAxios.get(`/api/getMovie?movieName=${movieName}`);
    return res;
}

export const addMovieToPlaylist = async(body) => {
    const res = await privateAxios.post('/api/addMovieToPlaylist', body);
    return res;
}

export const removeMovieFromPlaylist = async(body) =>{
    const res = await privateAxios.delete('/api/removeMovieFromPlaylist',{data:body});
    return res;
}