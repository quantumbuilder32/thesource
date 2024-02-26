import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import React from 'react'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Mission</h1>
            </section>

            <section>
                <div style={{ color: "#000", maxWidth: "75ch", margin: "0 auto", display: "grid", gap: "1rem" }}>
                    <h2>
                        Our Values and Mission
                    </h2>

                    <p>
                        At The Source, we are committed to providing exceptional services to homeowners, condos, apartments, and property managers. Our mission is to create clean, inviting, and attractive environments that enhance the quality of life for residents and ensure that properties are maintained to the highest standards.
                    </p>

                    <h2>
                        Our Mission
                    </h2>

                    <p>
                        We strive to reach out to homeowners, condos, and apartments, offering custodial services aimed at creating a clean and renting-friendly environment. Our goal is to ensure that residents feel proud to call their property home and to contribute to a positive living experience.
                    </p>

                    <h2>
                        Our Vision:
                    </h2>
                    <p>
                        We envision a future where every property we manage is considered A-class, attracting residents and enhancing property values. We are committed to making this vision a reality through our dedication to excellence and continuous improvement.
                    </p>

                    <h2>
                        Our Values:
                    </h2>

                    <ul style={{ display: "grid", gap: "1rem", paddingLeft: "1rem" }}>
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


                    <h2>Join Us in Building Better Communities:</h2>

                    <p>
                        At The Source, we are passionate about making a positive impact in the communities we serve. Join us in our mission to create clean, attractive, and welcoming environments for residents to call home.
                    </p>
                </div>
            </section>
        </main>
    )
}
