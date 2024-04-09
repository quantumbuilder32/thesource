"use client"
import Admin from '@/components/admin/Admin'
import UserLoginForm from '@/components/userLoginForm/UserLoginForm'
import { globalUser } from '@/utility/globalState'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'

export default function Page() {
    const [seenGlobalUser, seenGlobalUserSet] = useAtom(globalUser)

    return (
        <main>
            {seenGlobalUser === undefined ? (
                <section style={{ display: "grid", justifyContent: "center" }}>
                    <UserLoginForm />
                </section>

            ) : (
                <Admin />
            )}
        </main>
    )
}
