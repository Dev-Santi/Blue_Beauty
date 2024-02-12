import React from 'react';
import { syne } from '@/fonts';

type ButtonMdProps = {
    styles?: string;
    children: React.ReactNode;
    link: string;
};

export function ButtonMd({ styles, children, link }: ButtonMdProps) {
    if (!styles) styles = 'bg-gray-200 text-white hover:bg-blue-200';

    return (
        <a
            href={link}
            className={
                syne.className +
                ' flex items-center w-fit px-7 transition-all rounded-low py-3 uppercase font-medium tracking-wide ' +
                styles
            }
            type='button'
        >
            {children}
        </a>
    );
}
