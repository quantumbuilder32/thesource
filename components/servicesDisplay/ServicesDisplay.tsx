"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./style.module.css"
import { serviceType } from '@/lib/data/servicesData'

export default function ServicesDisplay({ services }: { services: serviceType[] }) {
    const [currentIndex, currentIndexSet] = useState(0)

    return (
        <div style={{ display: "grid" }} className={styles.mainCont}>
            <div style={{ display: "flex", overflowX: "auto" }}>
                {services.map((eachService, eachServiceIndex) => {
                    return (
                        <div key={eachServiceIndex} onClick={() => currentIndexSet(eachServiceIndex)} style={{ backgroundColor: currentIndex === eachServiceIndex ? "var(--primaryColor)" : "", display: "grid", gap: "1rem", color: "#fff", whiteSpace: "nowrap", borderRight: "1px solid #fff", borderTop: "1px solid #fff" }} className={styles.tabCont}>
                            {eachService.svg}

                            <p>{eachService.name}</p>
                        </div>
                    )
                })}
            </div>

            {services.map((eachService, eachServiceIndex) => {
                const currentlySelected = currentIndex === eachServiceIndex

                return (
                    <Image key={eachServiceIndex} priority={currentlySelected} alt={`${eachService.name}' image`} src={eachService.image} height={500} width={500} style={{ objectFit: "cover", width: "100%", height: "400px", display: !currentlySelected ? "none" : "" }} />
                )
            })}

            {services[currentIndex].supportedTextCont}
        </div>
    )
}
