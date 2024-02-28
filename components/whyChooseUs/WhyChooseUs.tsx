"use client"
import React, { useState } from 'react'
import styles from "./styles.module.css"

const whyChooseUsData = [
    {
        svg: <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />,
        title: 'We Offer',
        reasonEl:
            <>
                <p>Professional expertise and attention to detail for outstanding results.</p>
                <p style={{ fontStyle: "italic" }}>Comprehensive property maintenance, tailored to your needs.</p>
            </>
    },
    {
        svg: <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />,
        title: 'We Guarantee',
        reasonEl: <>
            <p>Guaranteed satisfaction with our services, backed by our commitment to excellence.</p>
            <p style={{ fontStyle: "italic" }}>Reliable and timely completion of projects, ensuring peace of mind for our clients.</p>
        </>
    },
    {
        svg: <path d="M224 0C348.8 0 448 35.2 448 80V96 416c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32V96 80C0 35.2 99.2 0 224 0zM64 128V256c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />,
        title: 'We Provide',
        reasonEl: <>
            <p>Efficient and effective solutions to address your property maintenance requirements.</p>
            <p style={{ fontStyle: "italic" }}>Transparent communication and personalized service to meet your expectations.</p>
        </>
    }
]


export default function WhyChooseUs() {
    const [activeIndex, activeIndexSet] = useState(0)

    return (
        <div style={{ color: "#000", display: "grid", justifyContent: "center" }} className={styles.mainDiv}>
            <div className='snap' style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
                {whyChooseUsData.map((each, eachIndex) => {
                    const selectedEl = eachIndex === activeIndex
                    let dynamicViewBox = eachIndex === 2 ? "0 0 448 512" : "0 0 640 512"

                    return (
                        <div key={eachIndex} className={styles.elCont} style={{ padding: "2rem 4rem", display: "grid", alignItems: "center", justifyItems: "center", gap: '1rem', backgroundColor: selectedEl ? "var(--primaryColor)" : "", cursor: "pointer", border: "1px solid var(--lighterFadedColor)", borderRadius: ".2rem", whiteSpace: "nowrap", }} onClick={() => { activeIndexSet(eachIndex) }}>
                            <svg style={{ width: "3rem", fill: selectedEl ? "#fff" : "var(--primaryColor)", display: "grid", alignItems: "center" }} xmlns="http://www.w3.org/2000/svg" viewBox={dynamicViewBox} >
                                {each.svg}
                            </svg>

                            <p style={{ color: selectedEl ? "#fff" : "" }}>{each.title}</p>
                        </div>
                    )
                })}
            </div>

            <div style={{ display: "grid", alignContent: 'flex-start', gap: "1rem", marginTop: "1rem", textAlign: 'center' }}>
                {whyChooseUsData[activeIndex].reasonEl}
            </div>
        </div>
    )
}
