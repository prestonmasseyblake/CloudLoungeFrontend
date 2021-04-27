import axios from 'axios';
const KEY = 'AIzaSyCKvbcsrztWq8NwLoB6xgcYNqo_81guRBQ'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
})