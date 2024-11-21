const fs = require('fs');
const path = require('path');

class FileHandler {
    constructor(directory) {
        this.directory = directory;

        // // Ensure the directory exists
        // if (!fs.existsSync(directory)) {
        //     fs.mkdirSync(directory);
        // }
    }

    listFiles() {
        return fs.readdirSync(this.directory);
    }

    createFile(fileName) {
        const filePath = path.join(this.directory, fileName);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '', 'utf8');
            return { errorCode:0 , data :  `File ${fileName} created.`};
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    deleteFile(fileName) {
        const filePath = path.join(this.directory, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return { errorCode:0 , data :  `File ${fileName} deleted.`};
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    renameFile(oldName, newName) {
        const oldPath = path.join(this.directory, oldName);
        const newPath = path.join(this.directory, newName);
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            return { errorCode:0 , data : `File ${oldName} renamed to ${newName}.`};
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    addDataToFile(fileName, data) {
        // if (!this.isValidJson(data)) {
        //    return  { errorCode:1 , data : 'Data is not in valid JSON format.'};
        // }
        
        const filePath = path.join(this.directory, fileName);
        if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(data));
          //  fs.appendFileSync(filePath, data + '\n', 'utf8');
            return { errorCode:0 , data : `Data added to ${fileName}.`};
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    readFile(fileName) {
        const filePath = path.join(this.directory, fileName);
        if (fs.existsSync(filePath)) {
            return { errorCode:0 , data :  fs.readFileSync(filePath, 'utf8')};
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    editFileById(fileName, id, newData) {
        if (!this.isValidJson(newData)) {
            throw new Error('New data is not in valid JSON format.');
        }
        
        const filePath = path.join(this.directory, fileName);
        if (fs.existsSync(filePath)) {
            const lines = fs.readFileSync(filePath, 'utf8').split('\n');
            if (id < lines.length) {
                lines[id] = JSON.stringify(newData);
                fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
                return `Line ${id} in ${fileName} edited.`;
            } else {
                throw new Error(`ID ${id} is out of range.`);
            }
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    editFileKeyValue(fileName, key, newValue) {
        const filePath = path.join(this.directory, fileName);
        if (fs.existsSync(filePath)) {
            const lines = fs.readFileSync(filePath, 'utf8').split('\n');
            const newLines = lines.map(line => {
                try {
                    const json = JSON.parse(line);
                    if (json[key] !== undefined) {
                        json[key] = newValue;
                        return JSON.stringify(json);
                    }
                } catch (e) {
                    return line; // Return the original line if it's not JSON
                }
                return line;
            });
            fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
            return `Key ${key} updated in ${fileName}.`;
        } else {
            return { errorCode:1 ,  msg : `File ${fileName} already exists.`};
        }
    }

    isValidJson(data) {
        try {
            JSON.parse(data);
            return true;
        } catch (e) {
            return false;
        }
    }
}

// // Example usage
// const fileHandler = new FileHandler('./files');
// try {
//     console.log(fileHandler.createFile('example.json'));
//     console.log(fileHandler.addDataToFile('example.json', '{"key1":"value1"}'));
//     console.log(fileHandler.readFile('example.json'));
//     console.log(fileHandler.editFileById('example.json', 0, '{"key1":"value2"}'));
//     console.log(fileHandler.editFileKeyValue('example.json', 'key1', 'value3'));
//     console.log(fileHandler.readFile('example.json'));
//     console.log(fileHandler.renameFile('example.json', 'test.json'));
//     console.log(fileHandler.listFiles());
//     console.log(fileHandler.deleteFile('test.json'));
// } catch (error) {
//     console.error(error.message);
// }

module.exports = new FileHandler('C:\\db'); // Exporting an instance of the class