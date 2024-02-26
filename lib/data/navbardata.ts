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
            {
                link: "/services/propertySolutions", title: "Property Solutions", id: 5,
            },
        ],
        id: 1,
    },
    {
        title: "Meet The Team",
        link: "/meetTheTeam",
        id: 2,
    },
    {
        title: "Project Gallery",
        link: "/projectGallery",
        id: 3,
    },
    {
        title: "Company",
        link: "/mission",
        subMenu: [
            {
                link: "/mission", title: "Mission", id: 1,

            },
            {
                link: "/testimonials", title: "Testimonials", id: 2,
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