'use client'

import { AnimatePresence, motion } from 'motion/react'

export function ScrollIcon() {
    return (
        <AnimatePresence>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className="w-10 h-10 border-1 border-foreground/40 mx-auto rounded-md flex justify-center"
                >
                    <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
