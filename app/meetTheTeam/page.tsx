import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Meet The Team</h1>
            </section>

            <section>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))", gap: "1rem" }}>
                    {[
                        {
                            image: require(`@/public/romario.jpeg`).default.src,
                            name: 'Romario Thomas',
                            title: 'CEO',
                            summary: "With Romario's visionary leadership, our company navigates towards success."
                        },
                        {
                            image: require(`@/public/christopher.jpeg`).default.src,
                            name: 'Christopher Ferguinson',
                            title: 'Management',
                            summary: "Under Christopher's astute management, every project thrives and prospers."
                        }
                        // {
                        //     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_44698927_original.jpg',
                        //     name: 'Mary Scott',
                        //     title: 'Cleaner',
                        //     summary: "Mary ensures every corner shines. She takes pride in her meticulous cleaning."
                        // },
                        // {
                        //     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899645_original.jpg',
                        //     name: 'Tom Allen',
                        //     title: 'Maintenance Technician',
                        //     summary: "Tom handles repairs and maintenance. He's always ready to fix any issues."
                        // },
                        // {
                        //     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_44709051_original.jpg',
                        //     name: 'Nina Cooper',
                        //     title: 'Property Manager',
                        //     summary: "Nina oversees property operations. She ensures everything runs smoothly."
                        // }
                    ].map((eachTeamMember, eachTeamMemberIndex) => {
                        return (
                            <div key={eachTeamMemberIndex} style={{ textAlign: "center", color: "#000" }}>
                                <Image alt={`${eachTeamMember.name}image`} src={eachTeamMember.image} height={200} width={200} style={{ objectFit: "cover", width: "100%", aspectRatio: "1/1", margin: "0 auto" }} />

                                <h2 style={{ marginTop: "1rem" }}>{eachTeamMember.name}</h2>
                                <p style={{ color: "var(--primaryColor)" }}>{eachTeamMember.title}</p>
                                <p>{eachTeamMember.summary}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
