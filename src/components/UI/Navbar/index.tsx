import { ButtonMd } from '../Buttons';
import Logo from '../Logo';
import Navigation from '../Navigation';

function Navbar() {
    return (
        <nav className='bg-white '>
            <div className='max-w-maxWidth mx-auto flex items-center justify-between py-10'>
                <Logo textColorBlue='text-blue-200' textColorBeauty='text-gray-200' />
                <div className='flex gap-x-12 items-center'>
                    <Navigation />
                    <ButtonMd link='#'>
                        Agendar Horario <span className='ml-2 text-2xl'>⌚</span>
                    </ButtonMd>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
