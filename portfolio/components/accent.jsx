import Image from 'next/image';
import accent2 from '@/public/images/Accent2.png';

export default function Accent() {
    return (
        <Image
            src={accent2}
            width={10}
            height={75}
            alt='A line with a circle at the bottom'
            className='scale-75'
        />
    );
}
