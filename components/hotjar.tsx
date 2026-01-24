import Script from 'next/script'

export function Hotjar() {
    const hotjarUrl = process.env.NEXT_PUBLIC_HOTJAR_SCRIPT_URL
    const isProduction = process.env.NODE_ENV === 'production'

    // Only load Hotjar in production to avoid polluting analytics with dev data
    if (!isProduction) {
        console.log('Hotjar disabled in development mode')
        return null
    }

    if (!hotjarUrl) {
        console.warn('Hotjar script URL not found. Please add NEXT_PUBLIC_HOTJAR_SCRIPT_URL to your .env.local file.')
        return null
    }

    return (
        <Script
            src={hotjarUrl}
            strategy="beforeInteractive"
        />
    )
}
