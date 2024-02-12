import Image from 'next/image';
import { ButtonMd } from '../Buttons';
import { syne } from '@/fonts';

export default function Header() {
    return (
        <header className='h-[36.5rem] bg-gradient-to-b from-blue-200 to-white flex items-center justify-center'>
            <HeaderImage />
            <section className='flex flex-col gap-6'>
                <h1
                    className={
                        'uppercase font-bold text-5xl tracking-wide drop-shadow-lg text-white ' +
                        syne.className
                    }
                >
                    Tu cabello Necesita <br /> una atención adecuada.
                </h1>
                <p
                    className={
                        'max-w-[33.5rem] text-white drop-shadow-lg text-[1.1rem] font-semibold ' +
                        syne.className
                    }
                >
                    Nuestro talentoso equipo está listo para realzar tu belleza y resaltar
                    tu personalidad, ofreciéndote cortes de vanguardia y servicios
                    personalizados.
                </p>
                <ButtonMd link='#'>Saber más {'->'}</ButtonMd>
            </section>
        </header>
    );
}

function HeaderImage() {
    return (
        <div className='h-full'>
            <Image
                className='h-full object-cover'
                src='/images/header.png'
                alt='Imagen de una chica con pelo rubio mirando sonriente hacia la cámara'
                width={850}
                height={850}
            />
        </div>
    );
}
