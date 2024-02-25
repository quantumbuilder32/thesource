import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import React from 'react'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Project Gallery</h1>
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h2>Maintenance</h2>
                <GalleryDisplay galleryImages={[]} />
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h2>Custodial</h2>
                <GalleryDisplay galleryImages={[]} />
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h2>Management</h2>
                <GalleryDisplay galleryImages={[]} />
            </section>
        </main>
    )
}
