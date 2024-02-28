import React from 'react'
import styles from "./page.module.css"
import { whyChooseUsData } from '../layout'
import ServicesDisplay from '@/components/servicesDisplay/ServicesDisplay'
import WhyChooseUs from '../WhyChooseUs'
import { allServicesData } from '@/lib/data/servicesData'

export default function Page() {
    return (
        <div>
            <ServicesDisplay services={allServicesData["custodial"]} />

            <section>
                <WhyChooseUs data={whyChooseUsData["custodial"]} />
            </section>
        </div>
    )
}
