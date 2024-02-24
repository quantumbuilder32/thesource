import Link from 'next/link'
import React from 'react'
import styles from "./secondaryButton.module.css"

export default function SecondaryButton({ link, text }: { link: string, text: string }) {
    return (
        <Link href={link}>
            <button className={styles.button}>{text}</button>
        </Link>
    )
}
