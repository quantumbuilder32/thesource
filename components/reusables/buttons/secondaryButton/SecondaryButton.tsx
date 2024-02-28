import Link from 'next/link'
import React from 'react'
import styles from "./secondaryButton.module.css"

export default function SecondaryButton({ link, text, ...elProps }: { link: string, text: string } & React.HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link {...elProps} href={link} style={{ ...elProps?.style }}>
            <button className={styles.button} style={{ color: "#fff" }}>{text}</button>
        </Link>
    )
}
