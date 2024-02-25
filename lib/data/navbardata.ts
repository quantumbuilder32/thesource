export type menuItem = {
    id: number,
    title: string,
    link: string,
    subMenu?: subMenuItem[]
}

type subMenuItem = {
    id: number,
    title: string,
    link: string,
    subSubMenu?: subSubMenuItem[]
}

type subSubMenuItem = {
    id: number,
    title: string,
    link: string
}

export const navItemsArr: menuItem[] = [
    {
        title: "Services",
        link: "/services",
        subMenu: [
            {
                link: "/services", title: "Overview", id: 1,
            },
            {
                link: "/services/maintenance", title: "Maintenance", id: 2,
            },
            {
                link: "/services/custodial", title: "Custodial", id: 3,
            },
            {
                link: "/services/management", title: "Management", id: 4,
            },
        ],
        id: 1,
    },
    {
        title: "About Us",
        link: "/aboutUs",
        id: 2,
    },
    {
        title: "Project Gallery",
        link: "/projectGallery",
        id: 3,
    },
    {
        title: "Company",
        link: "/company",
        subMenu: [
            {
                link: "/company", title: "Overview", id: 1,

            },
            {
                link: "", title: "Mission", id: 2,

            },
            {
                link: "", title: "Testimonials", id: 3,
            }
        ],
        id: 4,
    },
    {
        title: "Contact",
        link: "/contactUs",
        id: 5,
    },
]