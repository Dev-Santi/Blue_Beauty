import Logo from '../Logo';
import { syne } from '@/fonts';

function Navbar() {
    return (
        <nav className='bg-white '>
            <div className='max-w-maxWidth mx-auto flex items-center justify-between py-10 px-low'>
                <Logo textColorBlue='text-blue-200' textColorBeauty='text-gray-200' />
            </div>
        </nav>
    );
}

function Navigation() {
    return (
        <ul className={'' + syne.className}>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Profesionales</li>
            <li>Contacto</li>
        </ul>
    );
}

export default Navbar;
