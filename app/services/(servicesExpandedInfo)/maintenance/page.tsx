import React from 'react'
import styles from "./page.module.css"
import { allServicesData, whyChooseUsData } from '../layout'
import ServicesDisplay from '@/components/servicesDisplay/ServicesDisplay'
import WhyChooseUs from '../WhyChooseUs'

export default function Page() {
    return (
        <div>
            <ServicesDisplay services={allServicesData["maintenance"]} />

            <section>
                <WhyChooseUs data={whyChooseUsData["maintenance"]} />
            </section>
        </div>
    )
}
