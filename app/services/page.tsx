import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import MainButton from '@/components/reusables/buttons/mainbutton/MainButton'
import Image from 'next/image'
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>SERVICES</h1>
            </section>

            <div style={{ color: "#000", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 auto", display: "grid", alignContent: "flex-start", gap: "1rem", justifyItems: "center", padding: "1rem" }}>
                    <p style={{ fontSize: "var(--h2FontSize)", maxWidth: "200px", textAlign: "center" }}><span style={{ fontWeight: "bold" }}>We're Ready.</span> Talk with an expert today!</p>

                    <MainButton link='' text='Contact Us' />
                </div>

                <div style={{ flex: "5 1 600px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(400px, 100%), 1fr))", gap: "1rem" }}>
                    {[
                        {
                            title: "Maintenance",
                            img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            summary: "Our maintenance services cover a wide range of tasks to keep your property in top condition. From landscaping to pressure washing, we ensure every aspect of your property is well-maintained and pristine."
                        },
                        {
                            title: "Custodial",
                            img: "https://images.pexels.com/photos/7641008/pexels-photo-7641008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                            summary: "With our custodial services, we handle all indoor cleaning tasks with precision and care. From regular house cleaning to deep cleaning, we leave your interior spaces spotless and inviting."
                        },
                        {
                            title: "Management",
                            img: "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
                            summary: "Our management services provide comprehensive solutions for property management needs. From CAM services to office management, we ensure smooth operations and tenant satisfaction."
                        }
                    ].map((eachItem, eachItemIndex) => {
                        return (
                            <div key={eachItemIndex}>
                                <h1 style={{ fontWeight: "400", marginBottom: "1rem" }}>{eachItem.title}</h1>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                    <div style={{ flex: "1 1 100px", }}>
                                        <Image alt={`${eachItem.title}'simage`} src={eachItem.img} height={200} width={200} style={{ objectFit: "cover", aspectRatio: "1/1", width: "100%" }} />
                                    </div>

                                    <div style={{ flex: "1.5 1 100px", }}>
                                        <p style={{ marginBottom: "1rem" }}>{eachItem.summary}</p>

                                        <SecondaryButton link='' text='Learn More' />
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
