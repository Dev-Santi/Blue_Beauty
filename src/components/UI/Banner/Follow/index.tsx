import Image from 'next/image';

function Follow() {
    return (
        <div className='flex items-center text-white font-medium gap-3'>
            Síguenos:
            <ul className='flex items-center gap-3'>
                <li>
                    <SocialIcon
                        link='#'
                        iconPath='/icons/youtube.icon.png'
                        iconAlt='Icono de youtube'
                    />
                </li>

                <li>
                    <SocialIcon
                        link='#'
                        iconPath='/icons/instagram.icon.png'
                        iconAlt='Icono de instagram'
                    />
                </li>

                <li>
                    <SocialIcon
                        link='#'
                        iconPath='/icons/tiktok.icon.png'
                        iconAlt='Icono de tiktok'
                    />
                </li>

                <li>
                    <SocialIcon
                        link='#'
                        iconPath='/icons/facebook.icon.png'
                        iconAlt='Icono de facebook'
                    />
                </li>
            </ul>
        </div>
    );
}

type socialIconProps = {
    link: string;
    iconPath: string;
    iconAlt: string;
};

function SocialIcon({ link, iconPath, iconAlt }: socialIconProps) {
    return (
        <a href={link}>
            <Image
                className='min-w-5'
                src={iconPath}
                alt={iconAlt}
                width={20}
                height={20}
            />
        </a>
    );
}

export default Follow;
