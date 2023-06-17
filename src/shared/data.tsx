import {
    FeatureProps,
    ChicaneTwoText,
    HeaderProps
} from './types'
import { IconChevronDown } from '@tabler/icons-react'
import frontImage from '~/assets/images/front.webp'

export const heroProps: ChicaneTwoText = {
    title: {
        text: "Welcome to Chiane",
        alignment: 'center',
        fontSize: '7xl',
    },
    subtitle: {
        text: "Find the world of opportunites"
    }
}

export const featuresLargeData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'Astonishing to look',
                fontSize: '5xl',
                alignment: 'left',
            },
            subtitle: {
                text: 'React component that allows you to create a beautiful and responsive navigation bar.',
            },
        },
        actions: [
            {
                text: 'Download',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
                btnType: 'primary',
            }
        ]
    },
    image: {
        url: frontImage.toString(),
        alt: 'Front Image',
        width: '100%',
        height: '100%',
    },

}

export const headerData: HeaderProps = {
    links: [
        {
            label: 'Pages',
            icon: IconChevronDown,
            links: [
                {
                    label: 'About Us',
                    href: '/about',
                },
                {
                    label: 'Contact Us',
                    href: '/contact',
                },
                {
                    label: 'FAQ',
                    href: '/faq',
                },
                {
                    label: 'Pricing',
                    href: '/pricing',
                },
                {
                    label: 'Privacy Policy',
                    href: '/privacy',
                },
                {
                    label: 'Terms & Condition',
                    href: '/terms',
                },
            ]
        },
        {
            label: 'Blog',
            href: '/blog'
        },
        {
            label: 'Contact',
            href: '/contact'
        },
    ],
    actions: [
        {
            text: 'Download',
            href: 'https://github.com/onwidget/tailnext',
            targetBlank: true,
            btnType: 'primary',
        },

    ],
    isSticky: true,
    showToggleTheme: true,
    showRssFeed: false,
    position: 'right',
}