import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/fonts';

export const metadata: Metadata = {
    title: 'BLUE BEAUTY',
    description: 'Descripcion de la peluquería.',
};

type layoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: layoutProps) {
    return (
        <html lang='es'>
            <body className={'overflow-hidden ' + inter.className}>{children}</body>
        </html>
    );
}
