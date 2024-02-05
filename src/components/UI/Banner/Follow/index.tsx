import Image from 'next/image';

function Follow() {
    return (
        <div className='flex items-center text-white font-medium gap-3'>
            Síguenos:
            <ul className='flex items-center gap-3'>
                <li>
                    <a href='#'>
                        <Image
                            src='/icons/youtube.icon.png'
                            alt='Icono de youtube'
                            width={20}
                            height={20}
                        />
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <Image
                            src='/icons/instagram.icon.png'
                            alt='Icono de instagram'
                            width={20}
                            height={20}
                        />
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <Image
                            src='/icons/tiktok.icon.png'
                            alt='Icono de tiktok'
                            width={20}
                            height={20}
                        />
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <Image
                            src='/icons/facebook.icon.png'
                            alt='Icono de facebook'
                            width={20}
                            height={20}
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Follow;
