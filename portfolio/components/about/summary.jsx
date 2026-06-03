import Accent from '@/components/accent';

export default function Summary({ accent }) {
    return (
        <div className='flex max-w-3xl flex-col items-center'>
            <h2 className='text-center text-3xl lg:text-4xl'>About Me</h2>
            <Accent />
            <div className='mt-2 lg:mt-4'>
                <div className='mb-2'>
                    I&apos;m a Senior Software Developer who transitioned to the
                    field after almost a decade as a Data/Financial Analyst.
                    During my time as an analyst, I enjoyed working with many
                    wonderful people and gaining a wealth of knowledge. I also
                    developed valuable skills such as problem-solving, project
                    management, and consulting. However, whenever anyone asked
                    me if I liked my job, I always responded, &quot;It&apos;s
                    okay.&quot; I replied this way because I felt that something
                    was missing.
                </div>
                <div className='mb-2'>
                    After reflecting on it for a while, I realized that the
                    missing piece was creativity. I loved my job when I could
                    create tools and trackers by linking multiple files together
                    and writing formulas to make it all work, but I was only
                    able to do that some of the time. Then I found coding and
                    developed a real passion for it. Coding provides me with
                    limitless opportunities to geek out and apply my
                    problem-solving skills in a creative format. I now have the
                    ability to create fun and interactive websites or build a
                    web app that serves as a valuable tool for someone else to
                    use.
                </div>
                <div>
                    <p>
                        When I&apos;m not working or expanding my development
                        knowledge, I have many other interests:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>
                            Endurance running, resistance training, and
                            meditation are my favorite ways to maintain my
                            overall health.
                        </li>
                        <li>
                            Spending time with my family and caring for our mini
                            zoo at home. My wife and I have a 2-year-old
                            daughter and a variety of animals we own and foster.
                            We have dogs, cats, a snake, and more. It&apos;s
                            never boring around our house.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
