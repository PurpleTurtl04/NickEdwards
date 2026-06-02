import Link from 'next/link';
import Projects from '@/components/projects/projects';

import projects from '@/data/projects.json';

export default function ProjectSection() {
    return (
        <section className='mx-auto mt-30 px-6 lg:mt-40'>
            <Projects projects={projects} />
            <div className='mt-2 text-center lg:mt-6'>
                <Link href='/projects' className='link text-xl'>
                    View All Projects
                </Link>
            </div>
        </section>
    );
}
