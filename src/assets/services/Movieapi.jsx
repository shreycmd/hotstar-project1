import axios from "axios";
const movieurl="https://api.themoviedb.org/3";
const apikey="2ec0d66f5bdf1dd12eefa0723f1479cf";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const axiocall=axios.get(movieurl+"/trending/all/day?api_key="+apikey);
const moviegenre=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    axiocall,
    moviegenre
}