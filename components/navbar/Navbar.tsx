"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'

type menuItem = {
    id: number,
    title: string,
    link: string,
    subMenu?: subMenuItem[]
}

type subMenuItem = {
    id: number,
    title: string,
    link: string,
    subSubMenu?: subSubMenuItem[]
}

type subSubMenuItem = {
    id: number,
    title: string,
    link: string
}

const navItemsArr: menuItem[] = [
    {
        title: "Services",
        link: "/services",
        subMenu: [
            {
                link: "", title: "Overview", id: 1,

            },
            {
                link: "", title: "Landscaping", id: 2,

            },
            {
                link: "", title: "Maintenance", id: 3,

            },
            {
                link: "", title: "Deep Cleaning", id: 4,

            },
        ],
        id: 1,
    },
    {
        title: "About Us",
        link: "/aboutUs",
        id: 2,
    },
    {
        title: "Project Gallery",
        link: "/projectGallery",
        id: 3,
    },
    {
        title: "Company",
        link: "/company",
        subMenu: [
            {
                link: "", title: "Overview", id: 1,

            },
            {
                link: "", title: "Mission", id: 2,

            },
            {
                link: "", title: "Testimonials", id: 3,
            }
        ],
        id: 4,
    },
    {
        title: "Contact",
        link: "/contactUs",
        id: 5,
    },
]

export default function Navbar({ menuItemArr = navItemsArr }: { menuItemArr?: menuItem[] }) {
    const [subMenuShowing, subMenuShowingSet] = useState(() => {
        const newObj: { [key: string]: boolean } = {}
        menuItemArr.forEach(eachMenuItm => {
            newObj[eachMenuItm.id] = false
        })

        return newObj
    })

    return (
        <nav className={styles.nav}>
            <ul className={styles.menuCont}>
                <div style={{ display: "flex", flex: "1 1 700px" }}>
                    {menuItemArr.slice(0, 3).map((eachMenuItem) => {
                        return (
                            <li key={eachMenuItem.id} className={styles.menuItem}>
                                <div className={styles.chevronCont} style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", alignItems: "center", padding: "1rem" }} onClick={() => {
                                    subMenuShowingSet(prevObj => {
                                        const newObj = { ...prevObj }
                                        newObj[eachMenuItem.id] = !newObj[eachMenuItem.id]
                                        return newObj
                                    })
                                }}>
                                    <Link href={eachMenuItem.link}>
                                        {eachMenuItem.title}
                                    </Link>

                                    {eachMenuItem.subMenu && (
                                        <svg style={{ rotate: subMenuShowing[eachMenuItem.id] ? "180deg" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                    )}
                                </div>

                                {eachMenuItem.subMenu && subMenuShowing[eachMenuItem.id] && (
                                    <ul className={styles.subMenuCont}>
                                        {eachMenuItem.subMenu.map((eachSubMenuItem) => {
                                            return (
                                                <li key={eachSubMenuItem.id} className={styles.subMenuItem}>
                                                    <Link href={eachSubMenuItem.link}>
                                                        {eachSubMenuItem.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </div>

                <div style={{ display: "flex", }}>
                    {menuItemArr.slice(3, 5).map((eachMenuItem) => {
                        return (
                            <li key={eachMenuItem.id} className={styles.menuItem}>
                                <div className={styles.chevronCont} style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", alignItems: "center", padding: "1rem" }} onClick={() => {
                                    subMenuShowingSet(prevObj => {
                                        const newObj = { ...prevObj }
                                        newObj[eachMenuItem.id] = !newObj[eachMenuItem.id]
                                        return newObj
                                    })
                                }}>
                                    <Link href={eachMenuItem.link}>
                                        {eachMenuItem.title}
                                    </Link>

                                    {eachMenuItem.subMenu && (
                                        <svg style={{ rotate: subMenuShowing[eachMenuItem.id] ? "180deg" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                    )}
                                </div>

                                {eachMenuItem.subMenu && subMenuShowing[eachMenuItem.id] && (
                                    <ul className={styles.subMenuCont}>
                                        {eachMenuItem.subMenu.map((eachSubMenuItem) => {
                                            return (
                                                <li key={eachSubMenuItem.id} className={styles.subMenuItem}>
                                                    <Link href={eachSubMenuItem.link}>
                                                        {eachSubMenuItem.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </div>
            </ul>
        </nav>
    )
}