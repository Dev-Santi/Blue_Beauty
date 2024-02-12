import NavLink from './NavLink';
import { syne } from '@/fonts';

function Navigation() {
    return (
        <ul
            className={
                'flex uppercase gap-x-10 text-gray-50 font-medium ' + syne.className
            }
        >
            <NavLink styles='text-blue-200'>Inicio</NavLink>
            <NavLink>Nosotros</NavLink>
            <NavLink>Servicios</NavLink>
            <NavLink>Profesionales</NavLink>
            <NavLink>Contacto</NavLink>
        </ul>
    );
}

export default Navigation;
