'use client'

import { Marquee } from '@/components/magicui/marquee'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function InfiniteScrollText({
    variant,
    reverse,
}: {
    variant: 'white' | 'teal'
    reverse: boolean
}) {
    const items = Array.from({ length: 10 }, (item, i) => (
        <div
            key={i}
            className={cn(
                variant === 'white' ? 'text-primary' : 'text-white',
                'flex items-center space-x-6 lg:text-lg text-xs font-semibold'
            )}
        >
            <span>Dra. Viviane Wenceslau</span>
            <Image src="/icons/star.svg" alt="Estrela" width={40} height={40} />
            <span>Nutricionista</span>
            <Image src="/icons/star.svg" alt="Estrela" width={40} height={40} />
        </div>
    ))

    return (
        <div
            className={cn(
                variant === 'white' ? 'bg-white' : 'bg-primary',
                'relative w-full overflow-hidden  py-1'
            )}
        >
            <Marquee className="[--duration:200s]" reverse={reverse}>
                {[...items, ...items].map((item, index) => (
                    <div key={index + '-marquee'}>{item}</div>
                ))}
            </Marquee>
        </div>
    )
}
