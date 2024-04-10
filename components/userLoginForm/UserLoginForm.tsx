"use client"
import React, { useState } from 'react'
import styles from "./styles.module.css"
import { toast } from 'react-hot-toast'
import { AuthenticateAdminUser } from '@/serverFunctions/hanldeUsers'
import { useAtom } from 'jotai'
import { adminUser, globalUser } from '@/utility/globalState'
import { saveToLocalStorage } from '@/utility/saveToStorage'


export default function UserLoginForm() {
    const [, seenGlobalUserSet] = useAtom(globalUser)

    const initialForm = {
        username: "",
        password: "",
    }

    const [formObj, formObjSet] = useState({ ...initialForm })

    const handleSubmit = async () => {
        const authenticated = await AuthenticateAdminUser(formObj.username, formObj.password)

        if (authenticated) {
            seenGlobalUserSet(adminUser)

            //save record to storage
            saveToLocalStorage("user", adminUser)
        } else {
            toast.error("Couldn't authenticate")
        }
    }

    return (
        <form action={handleSubmit} style={{ display: "grid", alignContent: "flex-start", gap: "1rem", color: "#000" }}>
            <label htmlFor='username'>Username</label>

            <input id={`username`} type='text' value={formObj.username} onChange={(e) => {
                formObjSet(prevObj => {
                    prevObj.username = e.target.value

                    return { ...prevObj }
                })
            }} name='username' placeholder='Username' />



            <label htmlFor='password'>Password</label>

            <input id={`password`} type='password' value={formObj.password} onChange={(e) => {
                formObjSet(prevObj => {
                    prevObj.password = e.target.value

                    return { ...prevObj }
                })
            }} name='password' placeholder='Password' />


            <button type='submit' style={{ backgroundColor: "var(--primaryColor)", padding: '1rem 2rem', borderRadius: ".2rem" }} onClick={() => {

            }}>Login</button>
        </form>
    )
}
