"use client"
import MainButton from '@/components/reusables/buttons/mainbutton/MainButton'
import { navItemsArr } from '@/lib/data/navbardata'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function LeftSideInfo() {
    const pathname = usePathname()

    return (
        <div style={{ flex: "1 1 auto", display: "grid", alignContent: "flex-start", gap: "1rem", justifyItems: "center", padding: "1rem" }}>
            <p style={{ fontSize: "var(--h2FontSize)", maxWidth: "200px", textAlign: "center" }}><span style={{ fontWeight: "bold" }}>We&apos;re Ready.</span> Talk with an expert today!</p>

            <MainButton link='/contactUs' text='Contact Us' />

            <ul style={{ border: "1px solid var(--lightFadedColor)", padding: "1rem 2rem" }}>
                {navItemsArr[0].subMenu!.map((eachServiceLink, eachServiceLinkIndex) => {
                    return (
                        <li key={eachServiceLinkIndex} style={{ padding: "1rem", borderBottom: pathname === eachServiceLink.link ? "2px solid var(--secondaryColor)" : "2px solid transparent", color: pathname === eachServiceLink.link ? "var(--secondaryColor)" : "" }}>
                            <Link href={eachServiceLink.link}>{eachServiceLink.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
