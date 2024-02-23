import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import MainButton from '@/components/reusables/buttons/MainButton'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>SERVICES</h1>
            </section>

            <div style={{ color: "#000", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 300px", display: "grid", alignContent: "flex-start", gap: "1rem", justifyItems: "center" }}>
                    <p style={{ fontSize: "var(--h2FontSize)", maxWidth: "200px", textAlign: "center" }}><span style={{ fontWeight: "bold" }}>We're Ready.</span> Talk with an expert today!</p>

                    <MainButton link='' text='Contact Us' />
                </div>

                <div style={{ flex: "5 1 300px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(400px, 100%), 1fr))" }}>
                    {/* map */}
                    {[
                        {
                            title: "Maintenance",
                            img: "",
                            summary: "Our maintenance services cover a wide range of tasks to keep your property in top condition. From landscaping to pressure washing, we ensure every aspect of your property is well-maintained and pristine."
                        },
                        {
                            title: "Custodial",
                            img: "",
                            summary: "With our custodial services, we handle all indoor cleaning tasks with precision and care. From regular house cleaning to deep cleaning, we leave your interior spaces spotless and inviting."
                        },
                        {
                            title: "Management",
                            img: "",
                            summary: "Our management services provide comprehensive solutions for property management needs. From CAM services to office management, we ensure smooth operations and tenant satisfaction."
                        }
                    ].map((eachItem, eachItemIndex) => {
                        return (
                            <div key={eachItemIndex}>
                                <h1 style={{ fontWeight: "400", marginBottom: "1rem" }}>{eachItem.title}</h1>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                                    <Image alt={`${eachItem.title}'simage`} src={eachItem.img} height={200} width={200} style={{ flex: "1 1 100px", objectFit: "cover" }} />

                                    <div style={{ flex: "1.5 1 100px", }}>
                                        <p style={{ marginBottom: "1rem" }}>{eachItem.summary}</p>

                                        <button >Learn More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
