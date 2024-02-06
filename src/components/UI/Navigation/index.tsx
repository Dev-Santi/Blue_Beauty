import { syne } from '@/fonts';

function Navigation() {
    return (
        <ul
            className={
                'flex uppercase gap-x-10 text-gray-50 font-medium ' + syne.className
            }
        >
            <li className='text-blue-200'>
                <a href='#'>Inicio</a>
            </li>
            <li>
                <a href='#'>Nosotros</a>
            </li>
            <li>
                <a href='#'>Servicios</a>
            </li>
            <li>
                <a href='#'>Profesionales</a>
            </li>
            <li>
                <a href='#'>Contacto</a>
            </li>
        </ul>
    );
}

export default Navigation;
