'use client'

import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import Image from 'next/image'

interface Service {
    title: string
    description: string
    src: string
}

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
    service: Service
}

export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
    ({ service, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`xl:w-3/4 w-full bg-white rounded-xl px-8 py-8 flex gap-10 ${
                    className ?? ''
                }`}
                {...props}
            >
                <div>
                    <Image
                        src={service.src}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="lg:h-20 lg:w-20 h-12 w-12"
                    />
                </div>
                <div>
                    <h2 className="lg:text-3xl text-md text-primary font-bold">
                        {service.title}
                    </h2>
                    <p className="mt-2 text-[#656565] lg:text-2xl text-sm">
                        {service.description}
                    </p>
                </div>
            </div>
        )
    }
)

ServiceCard.displayName = 'ServiceCard'
