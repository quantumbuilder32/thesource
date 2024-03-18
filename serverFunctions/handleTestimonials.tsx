"use server"
import fs from "fs"
import path from "path"
import { checkIfFileExists, makeDirectory, readDataFromFile, saveDataToFile } from "./LocalFileStorage";
import { newReviewForm, reviewForm } from "@/types";


// Example usage
const testimonialsDirectory = "./serverData";
const clientTestimonialsFilePath = `${testimonialsDirectory}/clientTestimonials.json`;

export async function saveTestimonial(seenTestimonial: newReviewForm) {
    const finalTestimonial: reviewForm = {
        ...seenTestimonial,
        dateSubmitted: new Date
    }

    const fileExists = await checkIfFileExists(clientTestimonialsFilePath)

    if (fileExists) {
        //read and append
        fs.readFile(clientTestimonialsFilePath, 'utf8', (error, data) => {
            if (error) {
                console.log(`$error reading file in savetestimonials`, error);
                return
            }

            const prevTestimonials = JSON.parse(data) as reviewForm[]
            const newTestimonials = [...prevTestimonials, finalTestimonial]

            //save
            saveDataToFile(clientTestimonialsFilePath, newTestimonials)
        })

    } else {
        //create first time
        makeDirectory(testimonialsDirectory)
        saveDataToFile(clientTestimonialsFilePath, [finalTestimonial])
    }
}

export async function getTestimonials() {
    const fileExists = await checkIfFileExists(clientTestimonialsFilePath)

    if (!fileExists) {
        console.log(`$no file seen in get testimonials`);
        return []
    }

    return await readDataFromFile(clientTestimonialsFilePath) as reviewForm[]
}
