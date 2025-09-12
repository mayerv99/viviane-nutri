'use client'

import { Marquee } from '@/components/magicui/marquee'

export function InfiniteScrollText() {
    const items = Array.from({ length: 10 }, (_, i) => (
        <div
            key={i}
            className="flex items-center space-x-6 text-lg font-semibold text-primary"
        >
            <span>Dra. Viviane Wenceslau</span>
            <span className="text-orange-500">✦</span>
            <span>Nutricionista</span>
            <span className="text-orange-500">✦</span>
        </div>
    ))

    return (
        <div className="relative w-full overflow-hidden bg-white py-1">
            <Marquee className="[--duration:200s]">
                {[...items, ...items]}
            </Marquee>
        </div>
    )
}
