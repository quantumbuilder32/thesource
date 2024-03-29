"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styles from "./imagecarousel.module.css"
import MainButton from '../reusables/buttons/mainbutton/MainButton'

export default function ImageCarousel() {
    const [activeIndex, activeIndexSet] = useState(0)
    const [slidesInfo, slidesInfoSet] = useState([
        {
            mainTitle: "Expert Maintenance",
            supportingText: "Keep your property in top shape with our comprehensive maintenance solutions. From landscaping to pressure, we've got you covered.",
            buttonText: "Schedule Maintenance",
            bgImage: require(`@/public/slide1.jpeg`).default.src
        },
        {
            mainTitle: "Professional Custodial",
            supportingText: "Ensure a clean and hygienic environment with our custodial services. Our house cleaning expertise covers everything indoors.",
            buttonText: "Book House Cleaning",
            bgImage: require(`@/public/slide2.jpeg`).default.src
        },
        {
            mainTitle: "Efficient Management",
            supportingText: "Let us handle the management of your property with our smooth operations, guranteeing tenant satisfaction.",
            buttonText: "Learn More",
            bgImage: require(`@/public/slide3.jpeg`).default.src
        }
    ]);

    const [userManualScroll, userManualScrollSet] = useState(false)

    useEffect(() => {
        if (userManualScroll) return

        const intervalId = setInterval(() => {
            activeIndexSet((prevIndex) => (prevIndex + 1) % slidesInfo.length);
        }, 5000);

        return () => clearInterval(intervalId);

    }, [userManualScroll]);

    const userClickTimeout = useRef<NodeJS.Timeout>()


    return (
        <div style={{ minHeight: "80svh", position: "relative", padding: "3rem 1rem", display: "grid", alignItems: "center" }}>
            {slidesInfo.map((eachSlide, eachSlideIndex) => {
                return (
                    <Image key={eachSlideIndex} alt='img' src={eachSlide.bgImage} priority={eachSlideIndex === activeIndex} fill={true} style={{ objectFit: "cover", opacity: eachSlideIndex === activeIndex ? 1 : 0, transition: "opacity 600ms" }} />
                )
            })}

            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.7)" }}></div>


            {slidesInfo.map((eachSlide, eachSlideIndex) => {
                return (
                    <div key={eachSlideIndex} className={`${eachSlideIndex === activeIndex ? styles.fadeIn : ""}`} style={{ display: eachSlideIndex === activeIndex ? "flex" : "none", gap: "1rem", flexDirection: "column", maxWidth: "400px", color: "#fff" }}>
                        <h1 style={{ fontSize: "2.5rem" }}>{eachSlide.mainTitle}</h1>

                        <p>{eachSlide.supportingText}</p>

                        <MainButton link='/contactUs' text={eachSlide.buttonText} />
                    </div>
                )
            })}

            <div style={{ position: "absolute", bottom: 0, left: "50%", translate: "-50% 0", display: "flex", gap: ".5rem", padding: "1rem", zIndex: 2 }}>
                {slidesInfo.map((eachSlide, eachSlideIndex) => {
                    return (
                        <div key={eachSlideIndex} style={{ aspectRatio: "1/1", width: "1rem", borderRadius: "50%", backgroundColor: eachSlideIndex === activeIndex ? "var(--primaryColor)" : "var(--fadedColor)", cursor: "pointer" }} onClick={() => {
                            userManualScrollSet(true)

                            if (userClickTimeout.current) clearTimeout(userClickTimeout.current)

                            userClickTimeout.current = setTimeout(() => {
                                userManualScrollSet(false)
                            }, 30000);

                            activeIndexSet(eachSlideIndex)
                        }}></div>
                    )
                })}
            </div>
        </div>
    )
}
