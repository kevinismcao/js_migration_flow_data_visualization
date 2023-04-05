const axios = require('axios');
const fs = require('fs');

// Make a request to the API
axios.get('https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,STATE2,STATE2_NAME,FULL2_NAME,MOVEDOUT&for=county:*&in=state:*')
    .then((response) => {
        // Get the data from the response
        const data = response.data;

        // Convert the data to JSON format
        const jsonData = JSON.stringify(data, null, 2);

        // Save the JSON data to a file
        fs.writeFile('2020migration.json', jsonData, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Data saved to file!');
        });
    })
    .catch((error) => {
        console.error(error);
    });