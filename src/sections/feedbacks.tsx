'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function FeedbacksSection() {
    return (
        <div className="flex flex-col lg:gap-0 gap-10 lg:flex-row justify-center py-10 lg-px0 px-5 bg-white">
            <AnimatePresence>
                <motion.div
                    className="xl:text-[64px] lg:text-[48] md:text-[48px] text-[30px] wrap-anywhere lg:max-w-1/3 w-full lg:text-left text-center text-gray-700"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Histórias de quem já{' '}
                    <b className="text-primary">
                        transformou sua vida com a Dra. Viviane
                    </b>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
