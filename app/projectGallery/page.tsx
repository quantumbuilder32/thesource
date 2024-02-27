import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import React from 'react'
const projectImages = {
    "maintenance": [
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '123 Main Street, Anytown',
            summary: "Completed landscaping and garden maintenance."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
            title: '456 Elm Street, Cityville',
            summary: "Performed interior and exterior painting services."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
            title: '789 Oak Avenue, Suburbia',
            summary: "Provided comprehensive custodial services for the property."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_45031611_original-1024x681-570x450.jpg',
            title: '101 Pine Road, Rural Village',
            summary: "Managed property operations and maintenance tasks."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '222 Maple Lane, Townsville',
            summary: "Completed landscaping and garden maintenance."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
            title: '333 Cedar Street, Urbania',
            summary: "Performed interior and exterior painting services."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
            title: '444 Birch Boulevard, Countryside',
            summary: "Provided comprehensive custodial services for the property."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '555 Willow Way, Suburbville',
            summary: "Managed property operations and maintenance tasks."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
            title: '666 Oakwood Avenue, Metropolitan City',
            summary: "Completed landscaping and garden maintenance."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '777 Elmwood Drive, Downtown',
            summary: "Performed interior and exterior painting services."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
            title: '888 Pine Street, Seaside Resort',
            summary: "Provided comprehensive custodial services for the property."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
            title: '999 Maple Avenue, Lakeside Community',
            summary: "Managed property operations and maintenance tasks."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '123 Cedar Lane, Mountain Retreat',
            summary: "Completed landscaping and garden maintenance."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
            title: '456 Birch Road, Coastal Village',
            summary: "Performed interior and exterior painting services."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '789 Willow Avenue, Riverside Town',
            summary: "Provided comprehensive custodial services for the property."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
            title: '101 Oakwood Boulevard, Ski Resort',
            summary: "Managed property operations and maintenance tasks."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
            title: '112 Elm Lane, Desert Oasis',
            summary: "Completed landscaping and garden maintenance."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
            title: '131 Pine Street, Tropical Paradise',
            summary: "Performed interior and exterior painting services."
        },
        {
            image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
            title: '144 Cedar Avenue, Island Retreat',
            summary: "Provided comprehensive custodial services for the property."
        }
    ]

}

export default function Page() {
    return (
        <main>
            <section style={{ backgroundColor: "var(--backgroundColor)" }}>
                <h1 style={{ textAlign: "center" }}>Project Gallery</h1>
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h1 style={{ marginBottom: "1rem" }}>Maintenance</h1>

                <GalleryDisplay galleryImages={projectImages["maintenance"]} />
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h1 style={{ marginBottom: "1rem" }}>Custodial</h1>
                <GalleryDisplay galleryImages={projectImages["maintenance"]} />
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h1 style={{ marginBottom: "1rem" }}>Management</h1>
                <GalleryDisplay galleryImages={projectImages["maintenance"]} />
            </section>
        </main>
    )
}
