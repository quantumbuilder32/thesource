import React from 'react'
import styles from "./page.module.css"
import { allServicesData, whyChooseUsData } from '../layout'
import ServicesDisplay from '@/components/servicesDisplay/ServicesDisplay'
import WhyChooseUs from '../WhyChooseUs'
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'

export default function Page() {
    return (
        <main>
            <section >
                <div style={{ display: "grid", gap: "1rem", maxWidth: "75ch" }}>
                    <h1>Property solutions</h1>

                    <p>
                        Welcome to our Property Solutions page, where we offer a range of services to meet your property needs. Whether you&apos;re a homeowner, business owner, or property manager, we have the expertise and resources to help you maintain and enhance your property.
                    </p>

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
