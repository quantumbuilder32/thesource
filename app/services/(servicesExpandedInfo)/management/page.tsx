import React from 'react'
import styles from "./page.module.css"
import { allServicesData, whyChooseUsData } from '@/lib/data/servicesData'

import ServicesDisplay from '@/components/servicesDisplay/ServicesDisplay'
import WhyChooseUs from '../WhyChooseUs'

export default function Page() {
    return (
        <div>
            <ServicesDisplay services={allServicesData["management"]} />

            <section>
                <WhyChooseUs data={whyChooseUsData["management"]} />
            </section>
        </div>
    )
}
