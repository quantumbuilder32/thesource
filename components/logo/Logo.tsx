import Image from 'next/image'
import React from 'react'
import styles from "./logo.module.css"
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href={"/"} className={`${styles.logo}`} style={{ margin: "0 auto", cursor: "pointer", zIndex: 1000 }}>
            <Image alt='the Source Logo' priority={true} src={require(`@/public/logo.png`).default.src} width={200} height={200} style={{ objectFit: "contain" }} />
        </Link>
    )
}
