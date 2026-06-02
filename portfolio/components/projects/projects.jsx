import Image from 'next/image';

import Project from '@/components/projects/project';

export default function Projects({ projects }) {
    const projectList = projects.slice(0, 3);
    console.log(projectList);

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-center text-3xl lg:text-4xl'>Projects</h2>
                <Image
                    src='/images/Accent2.png'
                    width={10}
                    height={75}
                    alt='A line with a circle at the bottom'
                    className='scale-75'
                />
            </div>
            {/* {projectList.map((project) => (
                <Project key={project.id} {...project} />
            ))} */}
        </div>
    );
}
