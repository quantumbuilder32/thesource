import GalleryDisplay from '@/components/galleryDisplay/GalleryDisplay'
import React from 'react'
import { galleryObj } from './imageGalleryType'

const projectImages: {
    maintenance: galleryObj[],
    custodial: galleryObj[],
    management: galleryObj[],
} = {
    "maintenance": [
        // {
        //     collection: true,
        //     before: [{
        //         image: require(`@/public/maintenance/1.jpeg`).default.src,
        //         title: '123 Main Street, Anytown',
        //         summary: "Completed landscaping and garden maintenance."
        //     },
        //     {
        //         image: require(`@/public/maintenance/2.jpeg`).default.src,
        //         title: 'nautilus cove',
        //         summary: "pressure washing."
        //     },],
        //     after: [{
        //         image: require(`@/public/maintenance/1.jpeg`).default.src,
        //         title: '123 Main Street, Anytown',
        //         summary: "Completed landscaping and garden maintenance."
        //     },
        //     {
        //         image: require(`@/public/maintenance/2.jpeg`).default.src,
        //         title: 'nautilus cove',
        //         summary: "pressure washing."
        //     },]
        // },
        {
            image: require(`@/public/maintenance/1.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "Condo painting"
        },
        {
            image: require(`@/public/maintenance/2.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "pressure washing."
        },
        {
            image: require(`@/public/maintenance/3.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "pressure washing."
        },
        {
            image: require(`@/public/maintenance/4.jpeg`).default.src,
            title: '101 Pine Road, Rural Village',
            summary: "Managed property operations and maintenance tasks."
        },
        {
            image: require(`@/public/maintenance/5.jpeg`).default.src,
            title: '222 Maple Lane, Townsville',
            summary: "Completed landscaping and garden maintenance."
        },
        {
            image: require(`@/public/maintenance/6.jpeg`).default.src,
            title: 'long beach resort',
            summary: "pool maintenance."
        },
        {
            image: require(`@/public/custodial/3.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "house cleaning."
        },
        {
            image: require(`@/public/management/1.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "painting."
        },
        {
            image: require(`@/public/management/2.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "maintenance."
        },
        {
            image: require(`@/public/management/3.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "maintenance."
        },
        {
            image: require(`@/public/management/4.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "maintenance."
        },
        {
            image: require(`@/public/management/6.jpeg`).default.src,
            title: 'long beach resort',
            summary: "hotel maintenance."
        },

    ],
    "custodial": [
        {
            image: require(`@/public/custodial/1.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "pressure washing."
        },
        {
            image: require(`@/public/custodial/2.jpeg`).default.src,
            title: 'the cottage',
            summary: "house cleaning."
        },

        {
            image: require(`@/public/custodial/4.jpeg`).default.src,
            title: 'Urban Blue',
            summary: "house keeping"
        },
        {
            image: require(`@/public/custodial/5.jpeg`).default.src,
            title: 'Urban Blue',
            summary: "house keeping"
        },
        {
            image: require(`@/public/custodial/6.jpeg`).default.src,
            title: 'Urban Blue',
            summary: "house keeping"
        },
        {
            image: require(`@/public/custodial/7.jpeg`).default.src,
            title: 'Urban Blue',
            summary: "house keeping"
        },
        {
            image: require(`@/public/custodial/8.jpeg`).default.src,
            title: 'magestics',
            summary: "house cleaning."
        },

    ],
    "management": [

        {
            image: require(`@/public/management/5.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "irrigation."
        },
        {
            image: require(`@/public/management/9.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "Irrigation."
        },
        {
            image: require(`@/public/management/10.jpeg`).default.src,
            title: 'nautilus cove',
            summary: "General Pic."
        },
        {
            image: require(`@/public/management/11.jpeg`).default.src,
            title: 'long beach',
            summary: "pool service."
        },
        {
            image: require(`@/public/management/12.jpeg`).default.src,
            title: 'long beach',
            summary: "landscaping - orientation setup."
        },

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
                <GalleryDisplay galleryImages={projectImages["custodial"]} />
            </section>

            <section style={{ backgroundColor: "#000" }}>
                <h1 style={{ marginBottom: "1rem" }}>Management</h1>
                <GalleryDisplay galleryImages={projectImages["management"]} />
            </section>
        </main>
    )
}

// {
//     image: require(`@/public/maintenance/1.jpeg`).default.src,
//     title: '444 Birch Boulevard, Countryside',
//     summary: "Provided comprehensive custodial services for the property."
// },
// {
//     image: require(`@/public/maintenance/1.jpeg`).default.src,
//     title: '555 Willow Way, Suburbville',
//     summary: "Managed property operations and maintenance tasks."
// },
// {
//     image: require(`@/public/maintenance/1.jpeg`).default.src,
//     title: '666 Oakwood Avenue, Metropolitan City',
//     summary: "Completed landscaping and garden maintenance."
// },
// {
//     image: require(`@/public/maintenance/1.jpeg`).default.src,
//     title: '777 Elmwood Drive, Downtown',
//     summary: "Performed interior and exterior painting services."
// },
// {
//     image: require(`@/public/maintenance/1.jpeg`).default.src,
//     title: '888 Pine Street, Seaside Resort',
//     summary: "Provided comprehensive custodial services for the property."
// },

// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
//     title: '999 Maple Avenue, Lakeside Community',
//     summary: "Managed property operations and maintenance tasks."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
//     title: '123 Cedar Lane, Mountain Retreat',
//     summary: "Completed landscaping and garden maintenance."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
//     title: '456 Birch Road, Coastal Village',
//     summary: "Performed interior and exterior painting services."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
//     title: '789 Willow Avenue, Riverside Town',
//     summary: "Provided comprehensive custodial services for the property."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
//     title: '101 Oakwood Boulevard, Ski Resort',
//     summary: "Managed property operations and maintenance tasks."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_60036811_original-1024x684-570x450.jpg',
//     title: '112 Elm Lane, Desert Oasis',
//     summary: "Completed landscaping and garden maintenance."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_21975061_original-1024x785-570x450.jpg',
//     title: '131 Pine Street, Tropical Paradise',
//     summary: "Performed interior and exterior painting services."
// },
// {
//     image: 'https://ld-wp73.template-help.com/wordpress/prod_11363/v4/wp-content/uploads/2019/08/Depositphotos_14899737_original-1024x682-570x450.jpg',
//     title: '144 Cedar Avenue, Island Retreat',
//     summary: "Provided comprehensive custodial services for the property."
// }
