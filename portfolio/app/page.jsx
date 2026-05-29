import AboutSection from '@/components/landing/about';
import Hero from '@/components/landing/hero';
import ProjectSection from '@/components/landing/projects';

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ProjectSection />
        </div>
    );
}
