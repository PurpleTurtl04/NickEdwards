import Image from 'next/image';
import Link from 'next/link';

export default function ProjectSection() {
    return (
        <div className='mx-auto mt-30 px-6 lg:mt-40'>
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
            {/* <Project
            v-for="(project, index) in projectListLimited"
            :key="project.id"
            :="project"
            :index="index"
        /> */}
            <div className='mt-2 text-center lg:mt-6'>
                <Link href='/projects' className='link text-xl'>
                    View All Projects
                </Link>
            </div>
        </div>
    );
}
