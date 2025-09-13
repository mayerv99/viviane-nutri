import { InfiniteScrollText } from '@/components/scroll-text'
import AboutSection from '@/sections/about'
import FeedbacksSection from '@/sections/feedbacks'
import HeroSection from '@/sections/hero'
import Services from '@/sections/services'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <InfiniteScrollText variant="white" reverse={false} />
            <Services />
            <FeedbacksSection />
            <InfiniteScrollText variant="teal" reverse={true} />
            <AboutSection />
        </main>
    )
}
