import Link from 'next/link';
import logo from '~/assets/images/front.webp'


export const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <div className="mobile-nav__logo">
                <img src={logo.src} alt="logo" />
            </div>
            <div className="mobile-nav__menu">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}