import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import DefaultImage from '@/components/reusables/DefaultImage';
import { getTestimonials } from '@/serverFunctions/handleTestimonials';
import Image from 'next/image';
import React from 'react'

export default async function Page() {
    const testimonials = (await getTestimonials()).filter(eachTestimonial => eachTestimonial.accepted)

    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Testimonials</h1>
            </section>

            <section>
                <div className='snap' style={{ color: "#000", overflowX: "auto", display: "grid", gap: "1rem", gridAutoFlow: "column", gridAutoColumns: "min(330px, 100%)", textAlign: "center", paddingBlock: "1rem" }}>
                    {testimonials.map((eachTestimonial, eachTestimonialIndex) => {
                        return (
                            <div key={eachTestimonialIndex} style={{ display: "grid", padding: "1rem", gap: "1rem" }}>
                                <div style={{ aspectRatio: "1/1", overflow: "hidden", width: "50%", borderRadius: "50%", position: "relative", margin: "0 auto" }}>
                                    {eachTestimonial.image !== "" ? (
                                        <Image alt={`${eachTestimonial.name}'s image`} src={eachTestimonial.image} height={100} width={100} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                    ) : (
                                        <DefaultImage />
                                    )}
                                </div>


                                <div style={{ backgroundColor: "var(--lighterFadedColor)", padding: "4rem 1rem 1rem 1rem", position: "relative", translate: "0 -4rem", zIndex: -1, display: "flex", flexDirection: "column", }}>
                                    <p style={{ flex: 1 }}>{eachTestimonial.testimonial}</p>

                                    <h3 style={{ marginTop: "1rem" }}>{eachTestimonial.name}</h3>

                                    <p>{eachTestimonial.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
