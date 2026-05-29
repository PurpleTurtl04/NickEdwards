import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const nunitoSans = Nunito_Sans({
    variable: '--font-nunito-sans',
    subsets: ['sans-serif'],
});

export const metadata = {
    title: 'Nick Edwards - Dev & Design',
    description:
        'Welcome to my website! Please take a look at my projects and experience.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${nunitoSans.variable} h-full antialiased`}>
            <body className='font-nunito-sans flex min-h-full flex-col'>
                <Navbar />
                <main className='container mx-auto grow px-4 py-6'>
                    {children}
                </main>
            </body>
        </html>
    );
}
