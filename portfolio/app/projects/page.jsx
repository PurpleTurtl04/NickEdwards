import Projects from '@/components/projects/projects';

import projects from '@/data/projects.json';

export default function Portfolio() {
    return (
        <section className='mt-15 px-6'>
            <Projects projects={projects} />
        </section>
    );
}
