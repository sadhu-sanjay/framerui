import { IconChevronDown } from '@tabler/icons-react'
import frontImage from '~/assets/images/front.webp'
import {
    DoubleTextProps,
    FeatureProps,
    HeaderProps,
    ActionSectionProps
} from '../shared/types'


export const actionSectionData: ActionSectionProps = {
    twoText: {
        title: {
            text: 'Double Click to Update Anything',
        },
        subtitle: {
            text: 'Double click the image placeholders to add images. Do the same for any text, then tweak styles and publish.',
        },
    },
    actions: []
}


export const heroProps: DoubleTextProps = {
    title: {
        text: "Welcome to Chicane",
        alignment: 'text-center',
        fontSize: 'text-7xl'
    },
    subtitle: {
        text: "Find the world of opportunites",
        alignment: 'text-center',
    }
}

export const twoColumnImageTextData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'Double Click to Update Anything',
            },
            subtitle: {
                text: 'Double click the image placeholders to add images. Do the same for any text, then tweak styles and publish.',
            },
        },
        actions: [
            {
                text: 'Download ',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
                btnType: 'primary',
            },
            {
                text: 'Read More',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
                btnType: 'secondary',
            }
        ]
    },
    image: {
        url: frontImage.src,
        alt: 'Front Image',
        width: '100%',
        height: '100%',
    },
}

export const featuresLargeData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'Fast',
                fontSize: 'text-5xl',
                alignment: 'text-left',
            },
            subtitle: {
                text: 'You have never made website this fast before',
            },
        },
        actions: [
            {
                text: 'Read More',
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
            label: 'About',
            href: '/about'
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