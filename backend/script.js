const fs = require('fs');
const JSONStream = require('JSONStream');

// Provide your key mapping here
const keyMapping = {
    "t": "Case Title",
    "s": "Source",
    "id": "Indiankanoon ID",
    "d": "Case Proceedings",
    "c": "Citations",
    "cl": "Citations Length",
    "b": "Bench",
    "a": "Author"
    // Add other key mappings based on your requirements
};

// Input and output file paths
const inputFilePath = 'path/to/your/json/file.json';
const outputFilePath = 'path/to/your/json/transformedData.json';

// Create a read stream for the input JSON file
const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8' });

// Create a write stream for the transformed data
const writeStream = fs.createWriteStream(outputFilePath, { encoding: 'utf8' });

// Create a JSONStream parser
const jsonStream = JSONStream.parse('*');

// Transform keys based on the mapping
jsonStream.on('data', entry => {
    const transformedEntry = {};
    for (const oldKey in entry) {
        const newKey = keyMapping[oldKey] || oldKey;
        if (newKey === 'Case Proceedings' && entry[oldKey]) {
            // Remove spaces from the "Case Proceedings" field
            transformedEntry[newKey] = entry[oldKey].replace(/\s/g, '');
        } else {
            transformedEntry[newKey] = entry[oldKey];
        }
    }
    // Write the transformed entry to the output file
    writeStream.write(JSON.stringify(transformedEntry) + '\n');
});

// Handle end of the JSONStream
jsonStream.on('end', () => {
    // Close the write stream
    writeStream.end();
    console.log('Transformation completed. Transformed data saved at:', outputFilePath);
});

// Handle errors
jsonStream.on('error', error => {
    console.error('Error parsing JSON:', error);
});

// Pipe the read stream through the JSONStream parser
readStream.pipe(jsonStream);