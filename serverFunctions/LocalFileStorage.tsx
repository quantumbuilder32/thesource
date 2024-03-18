"use server"
import fs from "fs"
import path from "path"

export async function checkIfFileExists(filePath: string) {
    return fs.existsSync(filePath);
};

export async function saveDataToFile(filePath: string, defaultData: any) {
    fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), () => {
        console.log(`Data saved to file '${filePath}'.`);
    });
};

export async function readDataFromFile(filePath: string) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data)
}


export async function makeDirectory(directoryPath: string) {
    fs.mkdirSync(directoryPath)
};


