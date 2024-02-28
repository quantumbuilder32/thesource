"use client"
import React, { useState, FormEvent } from 'react'
import styles from "./styles.module.css"
import { toast } from 'react-hot-toast'
import Z from "zod"
import emailjs from "@emailjs/browser";
import SecondaryButton from '../reusables/buttons/secondaryButton/SecondaryButton'

const userFormSchema = Z.object({
    name: Z.string().min(1),
    email: Z.string().min(1),
    company: Z.string().min(1).nullable(),
    message: Z.string().min(1),
})

export default function ContactForm() {

    type userForm = Z.infer<typeof userFormSchema>

    const initialForm: userForm = {
        name: "",
        email: "",
        company: "",
        message: ""
    }

    const [formObj, formObjSet] = useState({ ...initialForm })
    const [formError, formErrorSet] = useState<{ [key: string]: string | null }>({})

    const checkIfValid = (seenFormObj: userForm, option: string) => {

        if (option === "name") {
            if (userFormSchema.pick({ name: true }).safeParse(seenFormObj).success) {
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

        if (option === "email") {
            if (userFormSchema.pick({ email: true }).safeParse(seenFormObj).success) {
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
                        prevObj[option] = "Email has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "company") {
            if (userFormSchema.pick({ company: true }).safeParse(seenFormObj).success) {
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
                        prevObj[option] = "Subject has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "message") {
            if (userFormSchema.pick({ message: true }).safeParse(seenFormObj).success) {
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
                        prevObj[option] = "Message has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

    }

    const handleSubmit = async (formSubmitEvent: FormEvent<HTMLFormElement>) => {
        formSubmitEvent.preventDefault();
        if (!userFormSchema.safeParse(formObj).success) return toast.error("Form not valid")

        const seenFormEl = formSubmitEvent.target as HTMLFormElement

        toast.success("working, but come back leter for setup")

        return

        const result = await emailjs
            .sendForm(
                `service_dfffusg`,
                `template_n2m1arg`,
                seenFormEl,
                `rKzfrKZJI8d6o86V-`
            )

        if ((result.status >= 200 && result.status < 300) || result.text === "OK") {
            console.log(`$success mans`, result);
            toast.success("Sent!")
            formObjSet({ ...initialForm })
        } else {
            toast.error("Couldn't send")
            console.log(`$seomething else happened`, result);
        }
    }

    return (
        <form method='POST' onSubmit={handleSubmit} className={styles.formDiv} style={{ display: "grid", alignContent: "flex-start" }}>
            <div className={styles.formColCont} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "1rem" }}>
                <div>
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
                        <input id="sentEmail" type='email' value={formObj.email} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.email = e.target.value
                                checkIfValid(prevObj, "email")

                                return { ...prevObj }
                            })
                        }} name='email' placeholder='Your Email'
                            onBlur={() => {
                                checkIfValid(formObj, "email")
                            }} />
                        <p>{formError["email"]}</p>
                    </div>

                    <div>
                        <input id="sentCompany" type='text' value={formObj.company ?? ""} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.company = e.target.value
                                checkIfValid(prevObj, "company")

                                return { ...prevObj }
                            })
                        }} name='company' placeholder='Your Company Name'
                            onBlur={() => {
                                checkIfValid(formObj, "company")
                            }} />

                        <p> {formError["company"]}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <textarea id="sentMessage" name='message' placeholder='Your Message' value={formObj.message} onChange={(e) => {
                            formObjSet(prevObj => {
                                prevObj.message = e.target.value
                                checkIfValid(prevObj, "message")

                                return { ...prevObj }
                            })
                        }} onBlur={() => {
                            checkIfValid(formObj, "message")
                        }} />

                        <p>{formError["message"]}</p>
                    </div>
                </div>
            </div>

            <button disabled={!userFormSchema.safeParse(formObj).success} type='submit' style={{ justifySelf: "flex-end", opacity: !userFormSchema.safeParse(formObj).success ? ".6" : "", backgroundColor: "var(--primaryColor)", padding: '1rem 2rem', borderRadius: ".2rem" }}>Send Message</button>
        </form>
    )
}
