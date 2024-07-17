import React from 'react'
import styles from "./page.module.css"
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'
import Image from 'next/image'

export default function Page() {
    return (
        <main>
            <section style={{ paddingBlock: "3rem", position: "relative" }}>
                <Image alt={`bgimage`} src={require(`@/public/propertySolutionsBg.jpg`).default.src} fill={true} style={{ flex: "1 1 300px", objectFit: "cover", top: 0, right: 0, height: "100%" }} />

                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, background: "linear-gradient(to right, var(--primaryColor), var(--primaryColor), transparent", }}></div>


                <div style={{ position: "relative", zIndex: 1 }}>
                    <h1>Property Solutions</h1>

                    <p style={{ maxWidth: "75ch", }}>Whether you&apos;re a homeowner, business owner, or property manager, we have the expertise and resources to help you maintain and enhance your property.</p>
                </div>
            </section>

            <section >
                <div style={{ display: "grid", gap: "1rem" }}>
                    <h2>Flexible Solutions for Every Need</h2>

                    <p>At The Source, we understand that every property is unique, and we offer flexible solutions tailored to your specific requirements. Whether you need routine maintenance, deep cleaning, or comprehensive property management, we&apos;ve got you covered.</p>

                    <h2> Diverse Expertise</h2>

                    <p>Our team of skilled professionals brings diverse expertise to every project, ensuring that your property receives the highest quality care and attention. From landscaping to office management, we have the knowledge and experience to handle it all.</p>

                    <p> Ready to experience the difference with our Property Solutions? Contact us today to learn more about our services and schedule your consultation. Let us help you maintain and enhance the value of your property!</p>

                    <SecondaryButton link='/contactUs' text='Get in Touch' />
                </div>
            </section>
        </main>
    )
}
