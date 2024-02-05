import { syne } from '@/fonts';
import Image from 'next/image';

type logoProps = {
    textColorBlue?: string;
    textColorBeauty?: string;
};

function Logo({ textColorBlue, textColorBeauty }: logoProps) {
    return (
        <a
            className={
                'flex items-center gap-x-4 tracking-[0.80rem] font-semibold ' +
                syne.className
            }
        >
            <span className={textColorBlue}>BLUE</span>
            <Image
                src='/logo/logo.svg'
                alt='Logo de Blue Beauty, se muestra un pelo largo azul.'
                width={50}
                height={50}
            />
            <span className={textColorBeauty}>BEAUTY</span>
        </a>
    );
}

export default Logo;
