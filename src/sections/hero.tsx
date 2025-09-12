'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="h-screen relative">
            {/* Background Images */}
            <div className="absolute inset-0">
                <Image
                    src="/images/bg-hero-mobile.webp"
                    alt="Dra. Viviane Queiroz Wenceslau - Nutricionista"
                    fill
                    className="object-cover border border-red-500 lg:hidden"
                    priority
                />
                <Image
                    src="/images/bg-hero-desktop.webp"
                    alt="Dra. Viviane Queiroz Wenceslau - Nutricionista"
                    fill
                    className="object-cover hidden lg:block"
                    priority
                />
                <div className="absolute inset-0" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-screen px-6 lg:px-12 xl:px-20 flex flex-col justify-between">
                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col justify-end h-full py-8 space-y-6">
                    <div className="bg-[#EAA98D] text-black px-4 py-2 rounded-full text-sm font-medium w-fit">
                        @vivianewenceslau.nutri
                    </div>

                    <div className="text-center space-y-4">
                        <h1 className="text-2xl text-gray-800 leading-tight text-left">
                            Cuidar da alimentação não é sobre restrição, é sobre{' '}
                            <span className="text-[#10635f] font-bold">
                                aprender a viver com equilíbrio
                            </span>
                            .
                        </h1>

                        <p className="text-base text-gray-600 leading-relaxed text-left">
                            Com a <strong>Dra.Viviane Queiroz Wenceslau</strong>
                            , você aprende a ter liberdade com consciência,
                            cuidando da sua saúde de forma leve e sustentável.
                        </p>
                    </div>

                    <button className="bg-primary hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 w-fit">
                        Agendar Consulta
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Layout - Flex version */}
                <div className="hidden lg:flex flex-1 items-center justify-between pl-52 pr-30">
                    <div className="flex flex-col gap-6 lg:w-1/2 x:w-3/4">
                        <div className="bg-[#EAA98D] text-black px-4 py-2 rounded-full text-sm font-medium w-fit">
                            @vivianewenceslau.nutri
                        </div>

                        <h1 className="text-4xl md:text-3xl xl:text-[64px] font-bold text-gray-800 leading-tight">
                            Cuidar da alimentação não é sobre restrição, é sobre{' '}
                            <span className="text-primary font-bold">
                                aprender a viver com equilíbrio
                            </span>
                            .
                        </h1>

                        <p className="text-lg xl:text-xl text-gray-600 leading-relaxed">
                            Com a <strong>Dra.Viviane Queiroz Wenceslau</strong>
                            , você aprende a ter liberdade com consciência,
                            cuidando da sua saúde de forma leve e sustentável.
                        </p>

                        <button className="bg-primary hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit">
                            Agendar Consulta
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Badge (Selo) */}
                    <div
                        className={cn(
                            'bg-white/20 backdrop-blur-sm border-white/30 border shadow-lg hidden 2xl:flex items-center justify-center rounded-full',
                            'w-72 h-72'
                        )}
                    >
                        <Image
                            src="/badge.svg"
                            alt="Selo Nutricionista"
                            width={120}
                            height={120}
                            className="w-full "
                        />
                    </div>
                </div>

                {/* Scroll text at the bottom */}
                {/* <div className="absolute bottom-0 left-0 right-0 z-20">
                    <InfiniteScrollText />
                </div> */}
            </div>
        </section>
    )
}
