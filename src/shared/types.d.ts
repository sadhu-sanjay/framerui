import { MouseEventHandler } from "react"


interface FeatureProps {
    actionSection: ActionSectionProps;
    image?: ChicaneImage;
}
interface ActionSectionProps {
    twoText: ChicaneTwoText;
    actions: Array<CallToAction>;
}
interface ChicaneTwoText {
    title?: TextProps
    subtitle?: TextProps
}
interface TextProps { 
    text?: string
    color?: string
    size?: string
    fontSize?: TailWindSizes
    alignment?: TailWindTextAlign
}
interface ChicaneImage {
    url?: string
    alt?: string
    width?: string
    height?: string
}


interface ToggleMenuProps {
    handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>
    isToggleMenuOpen: boolean
}

interface Link {
    label?: string
    href?: string
    ariaLabel?: string
    icon?: Function
}

interface MenuLink extends Link {
    links?: Array<Link>
}

interface CallToAction {
    text: string;
    href: string;
    icon?: Function;
    targetBlank?: boolean;
    btnText?: 'uppercase' | 'capitalize'
    btnType?: 'primary' | 'secondary'
}

export interface HeaderProps {
    links?: Array<MenuLink>;
    actions?: Array<CallToAction>;
    isSticky?: boolean;
    showToggleTheme: boolean;
    showRssFeed?: boolean;
    position: 'left' | 'right' | 'center';
}


// TailWind Types
type TailWindSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
type TailWindColor = 'primary' | 'secondary' | 'accent' | 'neutral' | 'base-100' | 'info' | 'success' | 'warning' | 'error'
type TailWindFont = 'sans' | 'serif' | 'mono'
type TailWindFontWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
type TailWindTextAlign = 'left' | 'center' | 'right' | 'justify'
