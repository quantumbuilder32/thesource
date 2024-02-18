import Image from 'next/image'
import React from 'react'
import styles from "./logo.module.css"

export default function Logo() {
    return (
        <Image className={`${styles.logo}`} alt='the Source Logo' priority={true} src={require(`@/public/logo.png`).default.src} width={250} height={250} style={{ objectFit: "contain", margin: "0 auto" }} />
    )
}
