import Experience from '@/components/about/experience';
import Summary from '@/components/about/summary';

export default function About() {
    return (
        <div className='container p-6'>
            <div className='mt-15 flex flex-col items-center px-6'>
                <Summary />
                <Experience />
            </div>
        </div>
    );
}
