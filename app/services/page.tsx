import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'
import LeftSideInfo from './LeftSideInfo'
import { servicesSummaryData } from '@/lib/data/servicesData'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>SERVICES</h1>
            </section>

            <section style={{ color: "#000", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <LeftSideInfo />

                <div style={{ flex: "5 1 600px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(400px, 100%), 1fr))", gap: "1rem" }}>
                    {servicesSummaryData.map((eachItem, eachItemIndex) => {
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
