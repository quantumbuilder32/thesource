"use client"
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import Image from 'next/image'

type galleryImageType = {
    image: string,
    title: string,
    summary: string,
}

export default function GalleryDisplay({ galleryImages }: { galleryImages: galleryImageType[] }) {
    const [selectedImage, selectedImageSet] = useState<number>()

    useEffect(() => {
        if (selectedImage !== undefined) {
            const body = document.querySelector("body") as HTMLBodyElement
            body.style.overflow = "hidden"
        } else {
            const body = document.querySelector("body") as HTMLBodyElement
            body.style.overflow = "auto"
        }
    }, [selectedImage])

    const next = () => {
        selectedImageSet(prev => {
            if (prev === undefined) return undefined
            let newNum = prev + 1

            if (newNum > galleryImages.length - 1) {
                newNum = 0
            }

            return newNum
        })
    }
    const prev = () => {
        selectedImageSet(prev => {
            if (prev === undefined) return undefined
            let newNum = prev - 1

            if (newNum < 0) {
                newNum = galleryImages.length - 1
            }

            return newNum
        })
    }

    return (
        <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "min(200px, 80%)", gridTemplateRows: "200px 200px", overflowX: "auto" }} >
            {galleryImages.map((eachImage, eachImageIndex) => {
                return (
                    <div key={eachImageIndex} style={{ cursor: "pointer", position: "relative" }} onClick={() => { selectedImageSet(eachImageIndex) }} className={styles.imageCont}>
                        <Image alt={`gallery image`} src={eachImage.image} height={400} width={400} style={{ objectFit: "cover", height: "100%" }} />

                        <div >
                            <p>{eachImage.title}</p>
                        </div>
                    </div>
                )
            })}


            {selectedImage !== undefined && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "grid", alignItems: "center", justifyItems: "center", zIndex: "1000" }} onClick={() => { selectedImageSet(undefined) }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "1rem", backgroundColor: "#000", width: "min(1000px, 100%)" }} onClick={(e) => e.stopPropagation()} >
                        <Image alt={`gallery image`} src={galleryImages[selectedImage].image} height={500} width={500} style={{ flex: "1 1 300px", objectFit: "contain", height: "100%" }} />

                        <div style={{ flex: "1 1 300px", display: "grid", alignContent: "flex-start", gap: "1rem" }}>
                            <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "1rem", userSelect: "none" }}
                                onKeyDown={(e) => {
                                    console.log(`$seen`);

                                    if (e.key === "ArrowLeft") {
                                        prev()
                                    }

                                    if (e.key === "ArrowRight") {
                                        next()
                                    }
                                }}>
                                <button onClick={prev}>
                                    <svg style={{ fill: "#fff", width: "3rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" /></svg>
                                </button>

                                <button onClick={next}>
                                    <svg style={{ rotate: "180deg", fill: "#fff", width: "3rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z" /></svg>
                                </button>
                            </div>

                            <h2>{galleryImages[selectedImage].title}</h2>

                            <p>{galleryImages[selectedImage].summary}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
