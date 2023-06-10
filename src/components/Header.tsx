'use client'

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { headerData } from '~/data/data'
import Logo from './atoms/Logo'
import ToggleMenu from "./atoms/ToggleMenu"

export default function Header() {

    const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;
    const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);
    const handleToggleMenuOnClick = () => {
        setIsToggleMenuOpen(!isToggleMenuOpen);
    };

    const updatedIsDropdownOpen =
        links &&
        links.map(() => {
            return false;
        });
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);

    return (
        <>
            <header className={`top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 ${isSticky ? 'sticky' : 'relative'}`}
                id="header">
                <div className="mx-auto w-full max-w-7xl py-3 px-3 md:flex md:justify-between md:py-3.5 md:px-4 bg-red-700 ">
                    <div className="flex justify-between">
                        <Link
                            className="flex items-center"
                            href="/"
                            onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
                            }
                        >
                            <Logo />
                        </Link>
                        <div className="flex items-center md:hidden">
                            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
                        </div>
                    </div>
                    <nav
                        className={`${isToggleMenuOpen ? 'block' : 'hidden'} h-screen md:w-full ${position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'}
                        w-auto overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible `}
                        aria-label="Main navigation"
                    >
                        <ul className="flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
                            {links &&
                                links.map(({ label, href, icon: Icon, links }, index) => (
                                    <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                                        <Link
                                            className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                                            href='/'
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}