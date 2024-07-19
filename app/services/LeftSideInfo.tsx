"use client"
import MainButton from '@/components/reusables/buttons/mainbutton/MainButton'
import { navItemsArr } from '@/lib/data/navbardata'
import { moreServices } from '@/lib/data/servicesData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./page.module.css"

export default function LeftSideInfo() {
    const pathname = usePathname()

    return (
        <div style={{ flex: "0 1 auto", display: "grid", alignContent: "flex-start", gap: "1rem", padding: "1rem", justifyItems: "center", margin: "0 auto" }}>
            <p style={{ fontSize: "var(--h2FontSize)", maxWidth: "200px", textAlign: "center", }}><span style={{ fontWeight: "bold" }}>We&apos;re Ready.</span> Talk with an expert today!</p>

            <MainButton link='/contactUs' text='Contact Us' />

            <ul style={{ border: "1px solid var(--lightFadedColor)", padding: "1rem 2rem", display: "grid" }}>
                {navItemsArr[0].subMenu!.map((eachServiceLink, eachServiceLinkIndex) => {
                    return (
                        <li key={eachServiceLinkIndex} className={styles.navLink} style={{ padding: "1rem", borderBottom: pathname === eachServiceLink.link ? "2px solid var(--secondaryColor)" : "", color: pathname === eachServiceLink.link ? "var(--secondaryColor)" : "", display: "grid", justifyItems: "center" }}>
                            <Link href={eachServiceLink.link}>{eachServiceLink.title}</Link>
                        </li>
                    )
                })}

                <ul style={{ marginTop: "2rem", borderLeft: "1px solid #000", borderBottom: "1px solid #000", padding: "1rem" }}>
                    <p>And More</p>

                    {moreServices.map((eachService, eachServiceIndex) => {
                        return (
                            <li key={eachServiceIndex} style={{ padding: "1rem", borderBottom: "2px solid transparent", position: "relative" }}>
                                <span style={{ position: "absolute", top: "50%", left: 0, translate: "0 -50%" }}>»</span>

                                {eachService}
                            </li>
                        )
                    })}
                </ul>
            </ul>
        </div>
    )
}
