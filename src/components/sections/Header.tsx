'use client'

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { headerData } from '~/data/data'
import Logo from '../atoms/Logo'
import ToggleMenu from "../atoms/ToggleMenu"
import { CallToAction } from "~/shared/types"
import CTA from '~/components/atoms/CTA'
import { IconRss } from '@tabler/icons-react'
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode'


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
                <div className=" mx-auto w-full max-w-7xl py-2 px-3 md:flex md:justify-between md:py-3.5 md:px-4 ">
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
                        animate-slide_down
                        w-auto overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible `}
                        aria-label="Main navigation"
                    >
                        <ul className=" flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
                            {links &&
                                links.map(({ label, href, icon: Icon, links }, index) => (
                                    <li key={`item-link-${index}`} className={` ${links?.length ? 'dropdown' : ''} `}>
                                        <Link
                                            className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
                                            href={href ?? ''}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                    <div
                        className={`${isToggleMenuOpen ? 'block' : 'hidden'
                            } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto
           md:self-center md:p-0`}
                    >
                        <div className="flex w-full items-center justify-between md:w-auto">
                            {showToggleTheme && <ToggleDarkMode />}
                            {showRssFeed && (
                                <Link
                                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                    aria-label="RSS Feed"
                                    href=""
                                >
                                    <IconRss className="h-5 w-5" />
                                </Link>
                            )}
                            {actions && actions.length > 0 && (
                                <div className="ml-4 flex w-max flex-wrap justify-end">
                                    {actions.map((callToAction, index) => (
                                        <CTA
                                            key={`item-action-${index}`}
                                            data={callToAction as CallToAction}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}