import Image from 'next/image';

import accent from '@/public/images/Accent.png';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className='mx-auto mt-30 grid max-w-7xl grid-cols-1 items-center justify-center gap-6 px-6 lg:mt-40 lg:grid-cols-2'>
            <div className='flex flex-col items-center lg:order-2'>
                <h2 className='pb-2 text-center text-3xl lg:text-4xl'>
                    About Me
                </h2>
                <p className='max-w-lg text-justify lg:text-left'>
                    A little over 8 years ago, I transitioned into software
                    development after spending nearly a decade working as a
                    financial and data analyst. I am passionate about creating
                    intuitive, user-friendly websites and applications. My
                    background has equipped me not only with the technical
                    skills to build these solutions but also with the analytical
                    mindset and attention to detail needed to measure their
                    performance and ensure they are both efficient and
                    effective.
                </p>
                <p className='mt-2 max-w-lg text-justify lg:text-left'>
                    Whether you&apos;re looking to create a consumer-facing
                    website or an internal business tool, I can help bring your
                    vision to life. Interested in learning more? Explore my{' '}
                    <Link href='/about' className='link link-warning'>
                        experience
                    </Link>{' '}
                    and featured{' '}
                    <Link href='/projects' className='link link-warning'>
                        projects
                    </Link>
                    .
                </p>
            </div>
            <div className='flex justify-center lg:gap-4'>
                <div>
                    <Image
                        src={accent}
                        width={10}
                        height={355}
                        alt='Three lines spaced with two circles in-between them'
                        className='hidden scale-75 lg:block'
                    />
                </div>
                <div className='flex flex-col justify-center gap-6 md:-ml-8 md:flex-row md:gap-20 md:text-center lg:order-1 lg:ml-0 lg:flex-col lg:gap-6 lg:text-start'>
                    <div className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4'>
                        <Image
                            src='/images/Eight.svg'
                            width={75}
                            height={75}
                            alt='The number eight inside a square'
                            className='max-w-15'
                        />
                        <p className='md:max-w-24 lg:max-w-none'>
                            8+ Years of Experience
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4'>
                        <Image
                            src='/images/Dev.svg'
                            width={75}
                            height={75}
                            alt='Angle brackets in a square'
                            className='max-w-15'
                        />
                        <p className='md:max-w-24 lg:max-w-none'>
                            Web/Software Development
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-4'>
                        <Image
                            src='/images/Design.svg'
                            width={75}
                            height={75}
                            alt='A pencil and ruler making an X'
                            className='max-w-15'
                        />
                        <p className='md:max-w-12 lg:max-w-none'>Web Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
