"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import { useAtom } from 'jotai'
import { screenSizeGlobal } from '@/utility/globalState'

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
    const [screenSize] = useAtom(screenSizeGlobal)
    const [menuItemsShowing, menuItemsShowingSet] = useState(false)

    return (
        <nav className={styles.nav}>
            {!screenSize.desktop && (
                <div onClick={() => menuItemsShowingSet(prev => !prev)} style={{ padding: "1rem", justifySelf: "center", cursor: "pointer", backgroundColor: menuItemsShowing ? "var(--fadedColor)" : "var(--secondaryColor)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            )}

            <ul className={styles.menuCont}>
                {(screenSize.desktop || menuItemsShowing) && (
                    <>
                        <div className={styles.splitCont} style={{ flex: "1 1 700px" }}>
                            {menuItemArr.slice(0, 3).map((eachMenuItem) => {
                                return (
                                    <MenuItem key={eachMenuItem.id} eachMenuItem={eachMenuItem} />
                                )
                            })}
                        </div>

                        <div className={styles.splitCont} style={{}}>
                            {menuItemArr.slice(3, 5).map((eachMenuItem) => {
                                return (
                                    <MenuItem key={eachMenuItem.id} eachMenuItem={eachMenuItem} />
                                )
                            })}
                        </div>
                    </>
                )
                }
            </ul>
        </nav>
    )
}

function MenuItem({ eachMenuItem }: { eachMenuItem: menuItem }) {
    const [subMenuShowing, subMenuShowingSet] = useState(false)

    return (
        <li className={styles.menuItem}>
            <div className={styles.chevronCont} style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", alignItems: "center", padding: "1rem" }} onClick={() => {
                subMenuShowingSet(prev => !prev)
            }}>
                <Link href={eachMenuItem.link}>
                    {eachMenuItem.title}
                </Link>

                {eachMenuItem.subMenu && (
                    <svg style={{ rotate: subMenuShowing ? "180deg" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                )}
            </div>

            {eachMenuItem.subMenu && subMenuShowing && (
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
}