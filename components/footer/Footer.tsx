import React from 'react'
import styles from "./footer.module.css"
import { navItemsArr } from '@/lib/data/navbardata'
import Link from 'next/link'
import { generalInfo } from '../../lib/data/GeneralInfo'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#000", padding: "5rem 2rem" }}>
            <div className={styles.footerNav} style={{ display: "grid", gap: "1rem", maxWidth: "900px", margin: "0 auto", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr)" }}>
                <div>
                    <h2>what we do</h2>

                    <p>At The Source, we specialize in providing comprehensive property maintenance services for homeowners, businesses, property managers, and facilities managers.</p>

                    <p style={{ marginTop: "2rem", fontSize: "var(--smallFontSize)", color: "var(--secondaryColor)", textAlign: "center" }}>Exceeding Expectación, Every Service,  Every Time</p>
                </div>

                <div>
                    <h2>links</h2>

                    <ul style={{ display: "grid", alignContent: "flex-start", gap: "1rem" }}>
                        {navItemsArr.map((eachItem, eachItemIndex) => {
                            if (eachItem.title.toLowerCase() === "contact") return null

                            return (
                                <li key={eachItemIndex}>
                                    <Link href={eachItem.link}>{eachItem.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <h2>contact</h2>

                    <div style={{ margin: "1rem auto", fontSize: "var(--h2FontSize)", display: "grid", justifyItems: "center" }}>
                        <p style={{ color: "var(--primaryColor)" }}>{generalInfo.phone}</p>
                        <p>Get Help Now</p>
                        <div style={{ aspectRatio: "1/1", width: "2.5rem", backgroundColor: "var(--primaryColor)", display: "grid", alignItems: "center", justifyItems: "center", borderRadius: "50%" }}>
                            <Link href={"/contactUs"}>
                                <svg style={{ width: "1rem", fill: "#000" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            </Link>
                        </div>
                    </div>

                    <p>{generalInfo.address}</p>

                    <p>Copyright © 2024 The Source All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
