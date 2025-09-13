'use client'

import { TextAnimate } from '@/components/magicui/text-animate'
// import { SectionEnd } from '@/components/section-end'
import { ServiceCard } from '@/components/service-card'
import { motion } from 'framer-motion'
type Service = { title: string; description: string; src: string }[]

const AnimatedServiceCard = motion(ServiceCard)

export default function Services() {
    const services: Service = [
        {
            title: 'Atendimento Individualizado e Humanizado',
            description:
                'Escuta ativa e cuidado integral, pensando em você além da balança.',
            src: '/icons/heart.svg',
        },
        {
            title: 'Acompanhamento Contínuo e Personalizado',
            description:
                'Um plano feito sob medida, ajustado à sua rotina e objetivos.',
            src: '/icons/clipboard.svg',
        },
        {
            title: 'Resultados Reais e Sustentáveis',
            description:
                'Mais energia, leveza e saúde com mudanças possíveis de manter.',
            src: '/icons/body.svg',
        },
        {
            title: 'Foco na Relação com a Comida',
            description:
                'Aprenda a comer sem culpa e construa equilíbrio, não apenas dieta.',
            src: '/icons/leaf.svg',
        },
    ]

    return (
        <div className="flex flex-col lg:gap-0 gap-10 lg:flex-row justify-center lg:py-48 py-20 lg-px0 px-5 bg-[#FFD7C8]">
            <TextAnimate
                animation="blurInUp"
                by="word"
                once
                className="xl:text-[84px] lg:text-[48] md:text-[48px] text-[30px] font-bold wrap-anywhere lg:max-w-1/3 w-full lg:text-left text-center text-primary"
            >
                Por que essa consulta é diferente de tudo que você já tentou?
            </TextAnimate>
            <div className="flex flex-col justify-between items-center xl:gap-10 gap-4  mx-auto lg:mx-0">
                {services.map((service, i) => (
                    <AnimatedServiceCard
                        key={i}
                        service={service}
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    />
                ))}
            </div>
        </div>
    )
}
