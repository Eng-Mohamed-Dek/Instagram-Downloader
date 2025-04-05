const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS to handle cross-origin requests

const app = express();
const port = 5000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Enable CORS for cross-origin requests
app.use(cors());

// POST route to handle Instagram URL download request
app.post('/download', async (req, res) => {
    const { url } = req.body;  // Get Instagram URL from request body
    
    if (!url) {
        return res.status(400).json({ message: 'Enter Video Url Cuz URL is required' });
    }

    try {
        // Call the Instagram Downloader API using RapidAPI
        const mediaData = await fetchInstagramMedia(url);
        res.status(200).json(mediaData);  // Return the media data as a response
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch media data', error: error.message });
    }
});

// Function to fetch Instagram media from RapidAPI using GET request
async function fetchInstagramMedia(url) {
    const encodedUrl = encodeURIComponent(url);  // URL-encode the Instagram URL for the API


    // Make a GET request to RapidAPI Instagram Downloader API
    const options = {
        method: 'GET',
        url: `https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/get-info-rapidapi?url=${encodedUrl}`,
        headers: {
            'x-rapidapi-key': process.env.API_KEY, // Your RapidAPI key
            'x-rapidapi-host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
        }
    };

    // Send GET request to RapidAPI
    try {
        const response = await axios(options);
        return response.data;  // Return the data from RapidAPI response
    } catch (error) {
        throw new Error('Error fetching Instagram media: ' + error.message);
    }
}

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
