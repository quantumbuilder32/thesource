"use client"
import React, { useState } from 'react'
import styles from "./style.module.css"
import Image from 'next/image'

type galleryImageType = {
    summary?: string,
    src: string
}

export default function GalleryDisplay({ galleryImages }: { galleryImages: galleryImageType[] }) {
    const [selectedImage, selectedImageSet] = useState<number>()

    return (
        <div style={{}}>
            {galleryImages.map((eachImage, eachImageIndex) => {
                return (
                    <div key={eachImageIndex} onClick={() => { selectedImageSet(eachImageIndex) }}>
                        <Image alt={`gallery image`} src={eachImage.src} height={400} width={400} style={{ objectFit: "cover" }} />

                        {selectedImage && (
                            <div>
                                <p>{eachImage.summary}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
