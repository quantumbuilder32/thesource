"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import { useAtom } from 'jotai'
import { screenSizeGlobal } from '@/utility/globalState'
import { menuItem, navItemsArr } from '@/lib/data/navbardata'
import { usePathname } from 'next/navigation'


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
    const pathname = usePathname()

    return (
        <li className={styles.menuItem}>
            <div className={styles.chevronCont} style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", alignItems: "center", padding: "1.7rem 1rem", cursor: "pointer", borderBottom: pathname === eachMenuItem.link ? "2px solid var(--primaryColor)" : "" }} onClick={() => {
                subMenuShowingSet(prev => !prev)
            }}>
                <Link href={eachMenuItem.link} style={{ textTransform: "uppercase", fontWeight: "100" }}>
                    {eachMenuItem.title}
                </Link>

                {eachMenuItem.subMenu && (
                    <svg style={{ rotate: subMenuShowing ? "180deg" : "", width: ".5rem" }} viewBox="0 0 96 96">
                        <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z" />
                    </svg>
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