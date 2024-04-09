"use client"
import ContactForm from '@/components/contactForm/ContactForm'
import MainButton from '@/components/reusables/buttons/mainbutton/MainButton'
import ReviewForm from '@/components/reviewForm/ReviewForm'
import { generalInfo } from '@/lib/data/GeneralInfo'
import { deleteTestimonial, getTestimonials } from '@/serverFunctions/handleTestimonials'
import { reviewForm } from '@/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Admin() {
    const [testimonials, testimonialsSet] = useState<reviewForm[]>([])

    //get testimonials
    useEffect(() => {
        const checkTest = async () => {
            testimonialsSet(await getTestimonials())
        }

        checkTest()
    }, [])


    return (
        <div style={{ color: "#000" }}>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center", color: "#fff" }}>Admin Panel</h1>
            </section>

            <div style={{ display: "grid" }}>
                <ul style={{ display: "flex", overflowX: "auto", gap: "1rem", padding: "1rem", justifyContent: "flex-end", backgroundColor: "var(--lighterFadedColor)" }}>
                    <li><Link href={"/makeInvoice"} >Make Invoice</Link></li>
                </ul>
            </div>

            {testimonials.length > 0 && (
                <section>
                    <h2>Manage Testimonials</h2>

                    <div className='snap' style={{ overflowX: "auto", display: "grid", gap: "1rem", gridAutoFlow: "column", gridAutoColumns: "min(400px, 100%)", textAlign: "center", paddingBlock: "1rem" }}>
                        {testimonials
                            .sort((a, b) => (new Date(b.dateSubmitted) as any) - (new Date(a.dateSubmitted) as any))
                            .map((eachTestimonial, eachTestimonialIndex) => {
                                return (
                                    <div style={{ position: 'relative', display: "grid" }}>
                                        <div style={{ justifySelf: 'flex-end' }} onClick={async () => {
                                            deleteTestimonial({ id: eachTestimonial.id })
                                            testimonialsSet(await getTestimonials())
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                        </div>

                                        <ReviewForm key={eachTestimonial.id} adminAccess={true} formIndexId={`${eachTestimonialIndex}`} passedFormObj={eachTestimonial} />
                                    </div>
                                )
                            })}
                    </div>
                </section>
            )}
        </div>
    )
}
