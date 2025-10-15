'use client'

import { TextAnimate } from '@/components/magicui/text-animate'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
    return (
        <section className="bg-[#FFEFE9] xl:py-48 py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Images Section */}
                    <div className="relative flex-shrink-0">
                        <AnimatePresence>
                            <div className="flex gap-4 relative">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <Image
                                        src="/images/viviane-2.png"
                                        alt="Dr. Viviane Wenceslau - Foto em preto e branco"
                                        width={280}
                                        height={400}
                                        className="rounded-3xl object-cover xl:h-[600px] h-[300px] w-fit"
                                    />
                                    <div className="absolute xl:-bottom-23 xl:-left-23 -left-13 -bottom-13">
                                        <Image
                                            src="/icons/star.svg"
                                            alt="Estrela"
                                            width={200}
                                            height={200}
                                            className="xl:w-50 xl:h-50 h-30 w-30 z-20"
                                        />
                                    </div>
                                </motion.div>
                                {/* Decorative star bottom */}

                                {/* Decorative star top */}
                                <motion.div
                                    initial={{ opacity: 0, x: -200 }}
                                    transition={{ duration: 0.5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute xl:-top-20 xl:-left-23 -top-13 -left-14">
                                        <Image
                                            src="/icons/star.svg"
                                            alt="Estrela"
                                            width={200}
                                            height={200}
                                            className="xl:w-50 xl:h-50 h-30 w-30 z-20"
                                        />
                                    </div>
                                    <Image
                                        src="/images/viviane-1.png"
                                        alt="Dr. Viviane Wenceslau - Foto colorida"
                                        width={280}
                                        height={400}
                                        className="rounded-3xl object-cover xl:h-[600px] h-[300px] w-fit"
                                    />
                                </motion.div>
                            </div>
                        </AnimatePresence>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 max-w-4xl">
                        <TextAnimate
                            animation="blurIn"
                            className="text-4xl lg:text-5xl font-bold text-teal-700 mb-8 leading-tight"
                            once
                        >
                            Conheça a Dra. Viviane Wenceslau
                        </TextAnimate>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <AnimatePresence>
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    key="paragraph-1"
                                >
                                    A Dra. Viviane Queiroz Wenceslau é
                                    nutricionista especializada em transtornos
                                    alimentares, com foco em compulsão,
                                    restrição severa, efeito sanfona e
                                    dificuldades na relação com a comida. Sua
                                    atuação vai além das dietas convencionais,
                                    com um acompanhamento individualizado, ético
                                    e empático, baseado na nutrição
                                    comportamental.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    key="paragraph-2"
                                >
                                    Ela desenvolve planos personalizados que
                                    respeitam a trajetória de cada paciente,
                                    promovendo saúde integral, equilíbrio e
                                    autonomia alimentar. Também compartilha
                                    conteúdos educativos sobre nutrição e saúde
                                    emocional no Instagram e no TikTok.
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
