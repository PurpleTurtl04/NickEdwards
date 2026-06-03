import AboutSection from '@/components/landing/about-section';
import HeroSection from '@/components/landing/hero-section';
import ProjectSection from '@/components/landing/project-section';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </div>
    );
}
