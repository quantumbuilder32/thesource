import Image from 'next/image'
import React from 'react'

export default function img() {
    return (
        <div>
            <Image alt={`${1}image`} src={require(`@/public`).default.src} height={400} width={400} style={{ objectFit: "contain" }} />
        </div>
    )
}
