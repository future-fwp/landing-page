
export default function Logo() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <defs>
            <linearGradient id="b" x1="87.629%" x2="9.97%" y1="28.473%" y2="86.882%">
                <stop offset="0%" stop-color="#20B2AA" stop-opacity="0"/>
                <stop offset="100%" stop-color="#20B2AA"/></linearGradient>
                <filter id="a" width="141.4%" height="141.4%" x="-20.7%" y="-20.7%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
                    </filter>
                    </defs>
                    <g fill="none" fill-rule="nonzero">
                        <rect stroke="#20B2AA" stroke-width="4" x="5" y="5" rx="4" width="28" height="28" filter="url(#a)"/>
                        <rect fill="url(#b)" x="5" y="5" rx="4" width="28" height="28"/>
                        </g>
                        </svg>)
}