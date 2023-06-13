'use client';

import { ThemeProvider } from 'next-themes';

interface ProvidorProps {
    children: React.ReactNode;
}

const ChicaneThemeProvider = ({children}: ProvidorProps) => {

    return (
        <ThemeProvider attribute='class' defaultTheme='system'>
            {children}
        </ThemeProvider>
    )

}

export { ChicaneThemeProvider }
