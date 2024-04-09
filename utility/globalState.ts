import { atom, useAtom } from 'jotai'
import { useEffect } from 'react';

export const screenSizeGlobal = atom<{
    desktop: boolean
    tablet: boolean,
    phone: boolean
}>({
    desktop: false,
    tablet: false,
    phone: false
});

export const themeGlobal = atom<boolean | undefined>(undefined);


export type user = {
    role: "admin" | "standard",
    name: string,
    username: string
}

export const adminUser: user = {
    role: "admin",
    name: "admin",
    username: "admin"
}

export const globalUser = atom<user | undefined>(undefined);
