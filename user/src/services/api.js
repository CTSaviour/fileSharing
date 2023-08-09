// import axios from 'axios';

// const API_URL = 'https://localhost:8888';

// export const uploadFile = async (data) => {
//     try {
//         // using api and routing to the /upload file
//         let response = await axios.post(`${API_URL}/upload`, data);
//         return response.data;
//     } catch(error) {
//         console.error("Error while calling the api", error.message);
//     }
//  }


import axios from 'axios';

const API_URI = 'http://localhost:8888';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}