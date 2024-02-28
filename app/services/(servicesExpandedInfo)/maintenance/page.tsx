import React from 'react'
import styles from "./page.module.css"
import ServicesDisplay from '@/components/servicesDisplay/ServicesDisplay'
import WhyChooseUs from '../WhyChooseUs'
import { allServicesData } from '@/lib/data/servicesData'
import { whyChooseUsData } from '../layout'

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
