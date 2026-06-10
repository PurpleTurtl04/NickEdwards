import Image from 'next/image';
import Link from 'next/link';

export default function Project({
    id,
    name,
    techStack,
    description,
    url,
    github,
    images,
}) {
    return (
        <div className='mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-4 pb-8 lg:mt-4 lg:grid-cols-2 lg:gap-6'>
            <div
                className={`card mx-auto mt-4 flex max-w-lg justify-center ${id % 2 == 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
                <div className='hover-gallery h-auto w-full'>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.image}
                            alt={image.alt}
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='rounded-2xl'
                        />
                    ))}
                </div>
            </div>
            <div
                className={`flex flex-col items-center ${id % 2 == 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <div className='flex flex-col items-center gap-1.5 lg:mt-0 lg:items-start lg:gap-2'>
                    <h3 className='text-2xl lg:text-3xl'>{name}</h3>
                    <div className='flex gap-1 lg:gap-1.5'>
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className={`badge badge-sm md:badge-md badge-soft ${tech.color}`}
                            >
                                {tech.name}
                            </div>
                        ))}
                    </div>
                    <p className='mt-2 max-w-lg text-center lg:text-left'>
                        {description}
                    </p>
                    <div className='flex justify-center gap-2 pt-3 lg:justify-start lg:pt-6'>
                        <Link href={url} target='_blank'>
                            <button className='btn btn-dash btn-primary tracking-wider'>
                                View Project
                            </button>
                        </Link>
                        <Link href={github} target='_blank'>
                            <button className='btn btn-soft btn-primary tracking-wider'>
                                Github Repo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
