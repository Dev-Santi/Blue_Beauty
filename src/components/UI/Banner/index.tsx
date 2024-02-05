import Contacts from './Contacts';
import Contact from './Contacts/Contact';
import Follow from './Follow';

function Banner() {
    return (
        <aside className='bg-blue-200'>
            <div className='flex flex-col gap-2 md:flex-row justify-between px-low py-4 max-w-maxWidth mx-auto'>
                <section>
                    <Contacts />
                </section>
                <section>
                    <Follow />
                </section>
            </div>
        </aside>
    );
}

export default Banner;
