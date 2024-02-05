import Contact from './Contact';
import Follow from './Follow';

function Banner() {
    return (
        <aside className='bg-blue-200'>
            <div className='flex flex-col md:flex-row justify-between px-4 py-4 max-w-[90rem] mx-auto'>
                <div className='flex flex-wrap md:flex-nowrap gap-11'>
                    <Contact
                        imagePath='/icons/mail.icon.png'
                        altText='Icono de mail'
                        content='contacto@bluebeauty.com.uy'
                    />

                    <Contact
                        imagePath='/icons/phone.icon.png'
                        altText='Icono de teléfono'
                        content='(00) 00000-0000'
                    />

                    <Contact
                        imagePath='/icons/whatsapp.icon.png'
                        altText='Icono de whatsapp'
                        content='(00) 00000-0000'
                    />
                </div>
                <div>
                    <Follow />
                </div>
            </div>
        </aside>
    );
}

export default Banner;
