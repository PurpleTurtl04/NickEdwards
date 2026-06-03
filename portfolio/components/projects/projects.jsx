import Accent from '@/components/accent';
import Project from '@/components/projects/project';

export default function Projects({ projects }) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-center text-3xl lg:text-4xl'>Projects</h2>
                <Accent />
            </div>
            {projects.map((project) => (
                <Project key={project.id} {...project} />
            ))}
        </div>
    );
}
