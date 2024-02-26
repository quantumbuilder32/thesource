import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import MainButton from '@/components/reusables/buttons/mainbutton/MainButton'
import Image from 'next/image'
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'
import LeftSideInfo from './LeftSideInfo'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>SERVICES</h1>
            </section>

            <section style={{ color: "#000", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <LeftSideInfo />

                <div style={{ flex: "5 1 600px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(400px, 100%), 1fr))", gap: "1rem" }}>
                    {[
                        {
                            link: "/services/maintenance",
                            title: "Maintenance",
                            img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            summary: "Our maintenance services cover a wide range of tasks to keep your property in top condition. From landscaping to pressure washing, we ensure every aspect of your property is well-maintained and pristine."
                        },
                        {
                            link: "/services/custodial",
                            title: "Custodial",
                            img: "https://images.pexels.com/photos/7641008/pexels-photo-7641008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                            summary: "With our custodial services, we handle all indoor cleaning tasks with precision and care. From regular house cleaning to deep cleaning, we leave your interior spaces spotless and inviting."
                        },
                        {
                            link: "/services/management",
                            title: "Management",
                            img: "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
                            summary: "Our management services provide comprehensive solutions for property management needs. From CAM services to office management, we ensure smooth operations and tenant satisfaction."
                        },
                        {
                            link: "/services/propertySolutions",
                            title: "Property Solutions",
                            img: "https://images.unsplash.com/photo-1611282712338-63a58e27980a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            summary: "Discover comprehensive property solutions tailored to meet your needs. We provide expert solutions to keep your property in top condition and ensure tenant satisfaction."
                        }
                    ].map((eachItem, eachItemIndex) => {
                        return (
                            <div key={eachItemIndex}>
                                <h1 style={{ fontWeight: "400", marginBottom: "1rem" }}>{eachItem.title}</h1>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                    <div style={{ flex: "1 1 200px", }}>
                                        <Image alt={`${eachItem.title}'simage`} src={eachItem.img} height={200} width={200} style={{ objectFit: "cover", aspectRatio: "1/1", width: "100%" }} />
                                    </div>

                                    <div style={{ flex: "1.5 1 200px", }}>
                                        <p style={{ marginBottom: "1rem" }}>{eachItem.summary}</p>

                                        <SecondaryButton link={eachItem.link} text='Learn More' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
