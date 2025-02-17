const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = 'rnd_Zf0NiXC3OwlgYWlkhooGj3rBTOUY';

app.get('/services', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving services');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});