import ContactForm from '@/components/contactForm/ContactForm'
import MainButton from '@/components/reusables/buttons/mainbutton/MainButton'
import { generalInfo } from '@/lib/data/GeneralInfo'
import React from 'react'

export default function Page() {
    return (
        <div>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Admin Panel</h1>
            </section>

            <section>
                <div>
                    <MainButton link='/makeInvoice' text='Make Invoice' />
                </div>
            </section>
        </div>
    )
}
