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