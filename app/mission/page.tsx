import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

export default function Page() {
    return (
        <main className={styles.mainDiv}>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center", color: "#fff" }}>Mission</h1>
            </section>

            <section style={{ justifySelf: "center" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                        <h1>Our Mission</h1>

                        <p>  At The Source, we are committed to providing exceptional services to homeowners, condos, apartments, and property managers. Our mission is to create clean, inviting, and attractive environments that enhance the quality of life for residents and ensure that properties are maintained to the highest standards.</p>

                        <p> Our goal is to ensure that residents feel proud to call their property home and to contribute to a positive living experience.</p>
                    </div>

                    <div >
                        <Image alt={`mission image`} src={require(`@/public/missionbg.jpg`).default.src} height={400} width={400} style={{ objectFit: "contain" }} />

                    </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <div >
                        <Image alt={`mission image`} src={"https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} height={400} width={400} style={{ objectFit: "contain" }} />
                    </div>

                    <div style={{ flex: "1 1 300px" }}>
                        <h1>Our Vision</h1>

                        <p>We envision a future where every property we manage is considered A-class, attracting residents and enhancing property values. We are committed to making this vision a reality through our dedication to excellence and continuous improvement.</p>

                        <h1 style={{ marginTop: "1rem" }}>Our Values</h1>

                        <ul style={{ display: "grid", gap: "1rem", padding: "1rem", maxWidth: "75ch" }}>
                            <li>
                                <b>Quality Service:</b> We believe in delivering top-notch services that exceed our clients&apos; expectations. We take pride in our work and strive for excellence in everything we do.
                            </li>


                            <li>
                                <b>Customer Satisfaction:</b> Our customers are our top priority. We listen to their needs, address their concerns, and go above and beyond to ensure their satisfaction.
                            </li>


                            <li>
                                <b> Team Collaboration:</b> We foster a culture of teamwork and collaboration, working alongside homeowners and property managers like partners. We value input from all stakeholders and believe in the power of collective effort.
                            </li>

                            <li>
                                <b>Integrity and Transparency:</b> We conduct business with honesty, integrity, and transparency. We believe in building trust with our clients through open communication and ethical practices.
                            </li>

                            <li>
                                <b> Continuous Improvement:</b> We are committed to continuously improving our services, processes, and technology to stay ahead of industry trends and provide the best possible solutions for our clients.
                            </li>
                        </ul>

                        <SecondaryButton link='/projectGallery' text='OUR PROJECTS' />
                    </div>
                </div>
            </section>
        </main>
    )
}
