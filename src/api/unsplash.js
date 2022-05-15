import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PQUcwVRPJgTvibufsfXQ-Sm1y6119iYmmnDHafj4uxM'
             } 

});