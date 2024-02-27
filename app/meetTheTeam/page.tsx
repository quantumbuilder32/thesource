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
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "1rem" }}>
                    {[
                        {
                            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_84860562_original-1024x682.jpg',
                            name: 'Jake Bill',
                            title: 'Gardener',
                            summary: "Jake is in charge of landscaping. He knows how to make your garden bloom."
                        },
                        {
                            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_44698927_original.jpg',
                            name: 'Mary Scott',
                            title: 'Cleaner',
                            summary: "Mary ensures every corner shines. She takes pride in her meticulous cleaning."
                        },
                        {
                            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899645_original.jpg',
                            name: 'Tom Allen',
                            title: 'Maintenance Technician',
                            summary: "Tom handles repairs and maintenance. He's always ready to fix any issues."
                        },
                        {
                            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_44709051_original.jpg',
                            name: 'Nina Cooper',
                            title: 'Property Manager',
                            summary: "Nina oversees property operations. She ensures everything runs smoothly."
                        }
                    ].map((eachTeamMember, eachTeamMemberIndex) => {
                        return (
                            <div key={eachTeamMemberIndex} style={{ textAlign: "center", color: "#000" }}>
                                <Image alt={`${eachTeamMember.name}image`} src={eachTeamMember.image} height={200} width={200} style={{ objectFit: "cover", width: "100%" }} />

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
