"use client"
import React, { useState } from 'react'
import styles from "./styles.module.css"
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { saveTestimonial } from '@/serverFunctions/handleTestimonials'
import { newReviewForm, newReviewFormSchema } from '@/types'


export default function ReviewForm() {
    const initialForm: newReviewForm = {
        name: "",
        testimonial: "",
        title: "",
        image: "",
        accepted: false,
    }

    const [formObj, formObjSet] = useState({ ...initialForm })
    const [formError, formErrorSet] = useState<{ [key: string]: string | null }>({})

    const checkIfValid = (seenFormObj: newReviewForm, option: string) => {

        if (option === "name") {
            if (newReviewFormSchema.pick({ name: true }).safeParse(seenFormObj).success) {
                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }

            } else {

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Name has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "testimonial") {
            if (newReviewFormSchema.pick({ testimonial: true }).safeParse(seenFormObj).success) {
                //success

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "testimonial has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "title") {
            if (newReviewFormSchema.pick({ title: true }).safeParse(seenFormObj).success) {
                //success

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {
                //nah
                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "title has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }
    }

    const handleSubmit = async () => {
        if (!newReviewFormSchema.safeParse(formObj).success) {
            console.log(`$testimonial cant be submitted`);
            return
        }

        await saveTestimonial(formObj)

        toast.success("Submitted Successfully!")
    }

    const changeImageToString = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return

        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result === null) return

            formObjSet(prevObj => {
                prevObj.image = `${reader.result}`
                return { ...prevObj }
            })
        };
        reader.readAsDataURL(file);
    };

    return (
        <form action={handleSubmit} className={styles.mainForm} style={{ display: "grid", alignContent: "flex-start", justifyItems: "center", gap: "1rem" }}>
            <div className={styles.formColCont} style={{ display: "grid", gap: "1rem" }}>
                <div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".5rem", alignItems: "center" }}>
                        {formObj.image && (
                            <Image alt={`pfp image`} src={formObj.image} height={100} width={100} style={{ objectFit: "cover", margin: "0 auto", borderRadius: ".2rem" }} />
                        )}

                        <label htmlFor='formProfileUpload' style={{ flex: 1, backgroundColor: "#000", padding: "1rem 2rem", fontWeight: "bold", borderRadius: ".3rem", color: "#fff", cursor: "pointer" }}>
                            Upload Photo / Logo - <i>optional</i>
                        </label>
                    </div>

                    <input id="formProfileUpload" type="file" accept="image/*" onChange={changeImageToString} hidden />
                </div>

                <div>
                    <input id='sentName' type='text' value={formObj.name} onChange={(e) => {
                        formObjSet(prevObj => {
                            prevObj.name = e.target.value

                            return { ...prevObj }
                        })
                    }} name='name' placeholder='Your Name'
                        onBlur={() => {
                            checkIfValid(formObj, "name")
                        }} />

                    <p>{formError["name"]}</p>
                </div>

                <div>
                    <input id="sentTitle" type='text' value={formObj.title} onChange={(e) => {
                        formObjSet(prevObj => {
                            prevObj.title = e.target.value
                            checkIfValid(prevObj, "title")

                            return { ...prevObj }
                        })
                    }} name='title' placeholder='Job Title'
                        onBlur={() => {
                            checkIfValid(formObj, "title")
                        }} />

                    <p> {formError["title"]}</p>
                </div>

                <div>
                    <textarea id="sentTestimonial" name='testimonial' placeholder='Testimonial' value={formObj.testimonial} onChange={(e) => {
                        formObjSet(prevObj => {
                            prevObj.testimonial = e.target.value
                            checkIfValid(prevObj, "testimonial")

                            return { ...prevObj }
                        })
                    }} onBlur={() => {
                        checkIfValid(formObj, "testimonial")
                    }} />

                    <p>{formError["testimonial"]}</p>
                </div>
            </div>

            <button disabled={!newReviewFormSchema.safeParse(formObj).success} type='submit' style={{ opacity: !newReviewFormSchema.safeParse(formObj).success ? ".6" : "", backgroundColor: "var(--primaryColor)", padding: '1rem 2rem', borderRadius: ".2rem" }}>Submit</button>
        </form>
    )
}
