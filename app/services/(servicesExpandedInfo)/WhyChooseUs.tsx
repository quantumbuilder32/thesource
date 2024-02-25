import React from 'react'
import { whyChooseUsType } from './layout'
import SecondaryButton from '@/components/reusables/buttons/secondaryButton/SecondaryButton'

export default function WhyChooseUs({ data }: { data: whyChooseUsType }) {
    return (
        <div style={{ display: "grid", gap: '1rem' }}>
            <h2>{data.catchPhrase}</h2>

            <p>{data.summary}</p>

            <ul style={{ display: "grid", gap: "1rem" }}>
                {data.reasons.map((eachReason, eachReasonIndex) => {
                    return (
                        <li key={eachReasonIndex} style={{ display: "grid", gap: ".5rem", gridTemplateColumns: "auto 1fr" }}>
                            <svg style={{ translate: "0 .5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>

                            {eachReason}
                        </li>
                    )
                })}
            </ul>

            <SecondaryButton link='/contactUs' text='Get Started' />
        </div>
    )
}
