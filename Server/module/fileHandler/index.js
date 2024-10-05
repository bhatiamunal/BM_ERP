const fs = require('fs');
const path = require('path');
const commonModule = require('../../common/module'); // Import the common module

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                commonModule.log(`Error reading file: ${err.message}`);
                return reject(commonModule.formatError(err));
            }
            resolve(data);
        });
    });
}

function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                commonModule.log(`Error writing file: ${err.message}`);
                return reject(commonModule.formatError(err));
            }
            resolve(commonModule.formatSuccess('File written successfully'));
        });
    });
}

module.exports = {
    readFile,
    writeFile,
};
