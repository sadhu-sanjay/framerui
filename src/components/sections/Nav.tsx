'use client'

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import useScroll from "~/libs/hooks/useScroll";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { headerData } from "~/data/data";
import CTA from "../atoms/CTA";
import { CallToAction } from "../shared/types";
import ToggleDarkMode from "../atoms/ToggleDarkMode";

const transparentHeaderSegments = new Set(["about", "projects"]);

export const Nav = () => {

    const scrolled = useScroll(80);
    const segment = useSelectedLayoutSegment();
    const { domain = "dub.sh" } = useParams() as { domain: string };
    const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

    return (
        <div
            className={clsx(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
                "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
                "border-b border-gray-200 bg-white":
                    segment && !transparentHeaderSegments.has(segment),
            })}
        >
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <Link
                        href={
                            domain === "dub.sh"
                                ? "/"
                                : `https://dub.sh?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`
                        }
                    >
                        <Image
                            src="/_static/logotype.svg"
                            alt="Dub.sh logo"
                            width={834}
                            height={236}
                            className="w-24"
                        />
                    </Link>

                    <div className="hidden items-center space-x-6 sm:flex">
                        {headerData.links?.map((item) => (
                            <Link
                                key={item.label}
                                href={
                                    domain === "dub.sh"
                                        ? item.href || ''
                                        : `https://dub.sh/${item}?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`
                                }
                                className={`rounded-md text-sm font-medium capitalize ${segment === item ? "text-black" : "text-gray-500"
                                    } transition-colors ease-out hover:text-black`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="flex w-full items-center justify-between md:w-auto">
                            {showToggleTheme && <ToggleDarkMode />}

                            {/* {actions && actions.length > 0 && (
                                <div className="ml-4 flex w-max flex-wrap justify-end">
                                    {actions.map((callToAction, index) => (
                                        <CTA
                                            key={`item-action-${index}`}
                                            data={callToAction as CallToAction}
                                        />
                                    ))}
                                </div>
                            )} */}
                        </div>
                        <Link
                            href={
                                process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
                                    ? "https://app.dub.sh/login"
                                    : "http://app.localhost:3000/login"
                            }
                            className="rounded-md text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                        >
                            Log in
                        </Link>
                        <Link
                            href={
                                process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
                                    ? "https://app.dub.sh/register"
                                    : "http://app.localhost:3000/register"
                            }
                            className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )

}