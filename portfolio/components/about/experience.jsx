import Accent from '@/components/accent';

import experienceList from '@/data/experience.json';

export default function Experience() {
    return (
        <section className='mt-15 flex flex-col items-center px-6'>
            <div className='flex max-w-3xl flex-col items-center'>
                <h2 className='text-center text-3xl lg:text-4xl'>Experience</h2>
                <Accent />
                <div className='mt-2 lg:mt-4'>
                    {experienceList.map((experience) => (
                        <div className='mb-8' key={experience.id}>
                            <h3 className='text-xl lg:text-2xl'>
                                {experience.role} -{' '}
                                <span className='italic'>
                                    {experience.company}
                                </span>
                            </h3>
                            <h4 className='text-md lg:text-lg'>
                                {experience.startDate} - {experience.endDate}
                            </h4>
                            <p className='pt-2'>{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
