import Contact from './Contact';

function Contacts() {
    return (
        <div className='flex flex-wrap md:flex-nowrap gap-x-11 gap-y-2'>
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
    );
}

export default Contacts;
