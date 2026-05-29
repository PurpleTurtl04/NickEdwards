import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='mt-30 flex flex-col items-center justify-center bg-white/10 lg:mt-40'>
            <h2 className='mt-6 pb-4 text-2xl'>Nick Edwards</h2>
            <div className='flex items-center justify-center gap-4 pb-6'>
                <a
                    href='tel:+15022996425'
                    title='Click to call: +1 (502) 299-6425'
                >
                    <Image
                        src='/images/Phone.svg'
                        width='25'
                        height='25'
                        alt='A phone symbol'
                    />
                </a>
                <a href='mailto:nledwa01@gmail.com'>
                    <Image
                        src='/images/Mail.svg'
                        width='25'
                        height='25'
                        alt='A mail envelope'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/nickedwards4186/'
                    target='blank'
                >
                    <Image
                        src='/images/LinkedIn.svg'
                        width='25'
                        height='25'
                        alt='The LinkedIn logo'
                    />
                </a>
            </div>
            <p className='mb-4'>
                &copy; 2026 Nick Edwards. All rights reserved.
            </p>
        </footer>
    );
}
