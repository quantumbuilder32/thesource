"use server"
import fs from "fs"
import path from "path"
import { checkIfFileExists, makeDirectory, readDataFromFile, saveDataToFile } from "./LocalFileStorage";
import { newReviewForm, reviewForm } from "@/types";
import { v4 as uuidv4 } from 'uuid';


// Example usage
const testimonialsDirectory = "./serverData";
const clientTestimonialsFilePath = `${testimonialsDirectory}/clientTestimonials.json`;

export async function saveTestimonial(seenTestimonial: newReviewForm) {
    const finalTestimonial: reviewForm = {
        ...seenTestimonial,
        dateSubmitted: new Date,
        id: uuidv4()
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

export async function updateTestimonial(seenTestimonial: reviewForm) {
    const fileExists = await checkIfFileExists(clientTestimonialsFilePath)

    if (fileExists) {
        fs.readFile(clientTestimonialsFilePath, 'utf8', (error, data) => {
            if (error) {
                console.log(`$error reading file in savetestimonials`, error);
                return
            }

            const prevTestimonials = JSON.parse(data) as reviewForm[]

            const newTestimonials = prevTestimonials.map(eachTestimonial => {
                if (eachTestimonial.id === seenTestimonial.id) {
                    return seenTestimonial
                } else {
                    return eachTestimonial
                }
            })

            //save
            saveDataToFile(clientTestimonialsFilePath, newTestimonials)
        })

    } else {
        console.log(`$not seeing file exists to update`);
    }
}

export async function deleteTestimonial(seenTestimonialId: Pick<reviewForm, "id">) {
    const fileExists = await checkIfFileExists(clientTestimonialsFilePath)

    if (fileExists) {
        fs.readFile(clientTestimonialsFilePath, 'utf8', (error, data) => {
            if (error) {
                console.log(`$error reading file in savetestimonials`, error);
                return
            }

            const prevTestimonials = JSON.parse(data) as reviewForm[]

            const newTestimonials = prevTestimonials.filter(eachTestimonial => eachTestimonial.id !== seenTestimonialId.id)

            //save
            saveDataToFile(clientTestimonialsFilePath, newTestimonials)
        })

    } else {
        console.log(`$not seeing file exists to delte`);
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
