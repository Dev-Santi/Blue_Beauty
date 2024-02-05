import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'BLUE BEAUTY',
    description: 'Descripcion de la peluquería.',
};

type childrenType = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: childrenType) {
    return (
        <html lang='es'>
            <body className='overflow-hidden'>{children}</body>
        </html>
    );
}
