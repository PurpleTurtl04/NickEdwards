import AboutSection from '@/components/landing/about-section';
import Hero from '@/components/landing/hero-section';
import ProjectSection from '@/components/landing/project-section';

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ProjectSection />
        </div>
    );
}
