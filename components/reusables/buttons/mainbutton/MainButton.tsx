import Link from 'next/link'
import React from 'react'
import styles from "./mainbutton.module.css"

export default function MainButton({ link, text, target, style }: { link: string, text: string, target?: string, style?: React.CSSProperties }) {
    return (
        <Link href={link} target={target} style={style}>
            <button className="mainButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" /></svg>

                <p>{text}</p>
            </button>
        </Link>
    )
}
