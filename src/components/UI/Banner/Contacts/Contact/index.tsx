import Image from 'next/image';
import { inter } from '@/fonts';

type contactProps = {
    imagePath: string;
    altText: string;
    content: string;
};

function Contact({ imagePath, altText, content }: contactProps) {
    return (
        <div
            className={
                'flex items-center gap-5 w-fit text-white text-base font-medium ' +
                inter.className
            }
        >
            <Image src={imagePath} alt={altText} width={20} height={20} />
            {content}
        </div>
    );
}

export default Contact;
