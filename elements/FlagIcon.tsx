interface FlagIconProps {
    className?: string,
    country: 'fr' | 'en'
}

// https://gitlab.com/catamphetamine/country-flag-icons/-/tree/master/3x2
export default function FlagIcon(props: FlagIconProps) {
    try {
        return flags[props.country](props.className)
    } catch (e) {
        console.error({ e })
        return <p className={props.className}>FR/EN</p>
    }
}

const flags = {
    'en': (className?: string) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333">
        <rect y="85.331" fill="#FFFFFF" width="512" height="341.337" />
        <rect y="85.331" fill="#0052B4" width="170.663" height="341.337" />
        <rect x="341.337" y="85.331" fill="#D80027" width="170.663" height="341.337" />
    </svg>,
    'fr': (className?: string) => <svg className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342">
        <rect y="0" fill="#FFFFFF" width="513" height="342" />
        <g fill="#D80027">
            <rect y="0" width="513" height="38" />
            <rect y="76" width="513" height="38" />
            <rect y="152" width="513" height="38" />
            <rect y="228" width="513" height="38" />
            <rect y="304" width="513" height="38" />
        </g>
        <rect y="0" fill="#2E52B2" width="256.5" height="190" />
        <g fill="#FFFFFF">
            <polygon points="47.8,141.9 43.8,129.1 39.5,141.9 26.3,141.9 37,149.6 33,162.4 43.8,154.5 54.5,162.4 50.3,149.6
            61.2,141.9 	"/>
            <polygon points="104.2,141.9 100.1,129.1 95.9,141.9 82.7,141.9 93.4,149.6 89.3,162.4 100.1,154.5 110.8,162.4
            106.8,149.6 117.6,141.9 	"/>
            <polygon points="160.6,141.9 156.4,129.1 152.4,141.9 138.9,141.9 149.8,149.6 145.6,162.4 156.4,154.5 167.3,162.4
            163.1,149.6 173.9,141.9 	"/>
            <polygon points="216.9,141.9 212.8,129.1 208.6,141.9 195.4,141.9 206.1,149.6 202.1,162.4 212.8,154.5 223.6,162.4
            219.4,149.6 230.3,141.9 	"/>
            <polygon points="100.1,78.3 95.9,91.1 82.7,91.1 93.4,99 89.3,111.6 100.1,103.8 110.8,111.6 106.8,99 117.6,91.1
            104.2,91.1 	"/>
            <polygon points="43.8,78.3 39.5,91.1 26.3,91.1 37,99 33,111.6 43.8,103.8 54.5,111.6 50.3,99 61.2,91.1 47.8,91.1
            "/>
            <polygon points="156.4,78.3 152.4,91.1 138.9,91.1 149.8,99 145.6,111.6 156.4,103.8 167.3,111.6 163.1,99 173.9,91.1
            160.6,91.1 	"/>
            <polygon points="212.8,78.3 208.6,91.1 195.4,91.1 206.1,99 202.1,111.6 212.8,103.8 223.6,111.6 219.4,99 230.3,91.1
            216.9,91.1 	"/>
            <polygon points="43.8,27.7 39.5,40.3 26.3,40.3 37,48.2 33,60.9 43.8,53 54.5,60.9 50.3,48.2 61.2,40.3 47.8,40.3 	" />
            <polygon points="100.1,27.7 95.9,40.3 82.7,40.3 93.4,48.2 89.3,60.9 100.1,53 110.8,60.9 106.8,48.2 117.6,40.3
            104.2,40.3 	"/>
            <polygon points="156.4,27.7 152.4,40.3 138.9,40.3 149.8,48.2 145.6,60.9 156.4,53 167.3,60.9 163.1,48.2 173.9,40.3
            160.6,40.3 	"/>
            <polygon points="212.8,27.7 208.6,40.3 195.4,40.3 206.1,48.2 202.1,60.9 212.8,53 223.6,60.9 219.4,48.2 230.3,40.3
            216.9,40.3 	"/>
        </g>
    </svg>


}