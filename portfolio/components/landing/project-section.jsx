import Link from 'next/link';
import Projects from '@/components/projects/projects';

import projects from '@/data/projects.json';

export default function ProjectSection() {
    const projectList = projects.slice(0, 3);

    return (
        <section className='mx-auto mt-30 px-6 lg:mt-40'>
            <Projects projects={projectList} />
            <div className='mt-6 text-center lg:mt-10'>
                <Link href='/projects' className='link text-xl'>
                    View All Projects
                </Link>
            </div>
        </section>
    );
}
