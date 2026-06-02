import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className='hero px-6'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='max-w-3xl'>
                    <Image
                        src='/images/HeroImage.png'
                        alt='Nick holding his daughter'
                        width={905}
                        height={912}
                    />
                </div>
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                        Hello I&apos;m
                    </h2>
                    <h1 className='text-primary pt-3 text-6xl font-extrabold md:text-7xl lg:ml-5 lg:text-8xl'>
                        Nick
                    </h1>
                    <h3 className='max-w-83 pt-3 text-lg md:max-w-sm md:text-xl lg:max-w-lg lg:text-2xl'>
                        A Full-Stack Web
                        <span className='text-primary/90 font-bold'>
                            {' '}
                            Developer{' '}
                        </span>
                        &
                        <span className='text-primary/90 font-bold'>
                            {' '}
                            Designer{' '}
                        </span>
                        with an analytical background
                    </h3>
                    <div className='flex justify-center gap-2 pt-6 lg:justify-start'>
                        <Link
                            href='?modal=open'
                            scroll={false}
                            className='btn btn-primary bg-primary/90 tracking-wider'
                        >
                            Got a Project?
                        </Link>
                        <button className='btn btn-outline btn-primary tracking-wider'>
                            <Link href='/about'>My Experience</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
