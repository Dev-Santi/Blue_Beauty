import Link from 'next/link';

type navLinkProps = { styles?: string; link?: string; children: React.ReactNode };

function NavLink({ styles, link, children }: navLinkProps) {
    return (
        <li className={'hover:text-blue-100 transition-all duration-normal ' + styles}>
            <Link href={link || '#'}>{children}</Link>
        </li>
    );
}
export default NavLink;
