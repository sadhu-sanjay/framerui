import { MouseEventHandler } from "react"

interface ChicaneTextProps { 
    title?: string
    subtitle?: string
    color?: string
    size?: string
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
