import Image from 'next/image'
import React from 'react'
import styles from "./logo.module.css"
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image className={`${styles.logo}`} alt='the Source Logo' priority={true} src={require(`@/public/logo light.png`).default.src} width={250} height={250} style={{ objectFit: "contain", margin: "0 auto" }} />
        </Link>
    )
}
