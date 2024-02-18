"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./imagecarousel.module.css"

export default function ImageCarousel() {
    const [activeIndex, activeIndexSet] = useState(0)
    const [slideInfo, slideInfoSet] = useState([
        {
            mainTitle: "Revitalize Your Home",
            supportingText: "Transform your living space with our expert painting services. From vibrant accent walls to elegant color schemes, we bring your vision to life.",
            buttonText: "Get a Free Painting Quote",
            bgImage: require(`@/public/slide1.jpeg`).default.src
        },
        {
            mainTitle: "Fixing Made Easy",
            supportingText: "Don't let household repairs stress you out. Our skilled technicians are here to handle everything from leaky faucets to electrical issues, so you can enjoy peace of mind.",
            buttonText: "Schedule a Fixing Service",
            bgImage: require(`@/public/slide2.jpeg`).default.src
        },
        {
            mainTitle: "Spotless Cleaning Services",
            supportingText: "Experience the difference with our thorough cleaning services. From routine maintenance to deep cleaning, we leave your property sparkling clean and inviting.",
            buttonText: "Book a Cleaning Appointment",
            bgImage: require(`@/public/slide3.jpeg`).default.src
        }
    ])

    return (
        <div style={{ height: "80svh", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 2, }}></div>


            {slideInfo.map((eachSlide, eachSlideIndex) => {
                return (
                    <React.Fragment key={eachSlideIndex}>
                        <Image alt='img' src={eachSlide.bgImage} priority={eachSlideIndex === activeIndex} fill={true} style={{ objectFit: "cover", opacity: eachSlideIndex === activeIndex ? 1 : 0, transition: "opacity 600ms", zIndex: 1 }} />


                        <div className={`${eachSlideIndex === activeIndex ? styles.fadeIn : ""}`} style={{ display: eachSlideIndex === activeIndex ? "flex" : "none", gap: "1rem", flexDirection: "column", top: "50%", translate: "0 -50%", marginLeft: "1rem", zIndex: 3, position: "relative", maxWidth: "400px", color: "#fff" }}>
                            <h1>{eachSlide.mainTitle}</h1>

                            <p>{eachSlide.supportingText}</p>

                            <Link href={""}>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" /></svg>

                                    {eachSlide.buttonText}
                                </button>
                            </Link>
                        </div>
                    </React.Fragment>
                )
            })}

            <div style={{ position: "absolute", bottom: 0, left: "50%", translate: "-50% 0", display: "flex", gap: ".5rem", padding: "1rem" }}>
                {slideInfo.map((eachSlide, eachSlideIndex) => {
                    return (
                        <div key={eachSlideIndex} style={{ aspectRatio: "1/1", width: "1rem", borderRadius: "50%", backgroundColor: eachSlideIndex === activeIndex ? "var(--mainColor)" : "var(--fadedColor)", cursor: "pointer" }} onClick={() => activeIndexSet(eachSlideIndex)}></div>
                    )
                })}
            </div>
        </div>
    )
}
