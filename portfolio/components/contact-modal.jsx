'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

//import SignUpField from '@/components/sign-up-field';

export default function ContactModal() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Checks if the URL has ?modal=open
    const isOpen = searchParams.get('modal') === 'open';

    const closeModal = () => {
        // Navigates back to the page without the modal query param
        router.push(pathname, { scroll: false });
    };

    if (!isOpen) return null;

    return (
        <dialog open className='modal modal-open'>
            <div className='modal-box max-w-md'>
                <button
                    onClick={closeModal}
                    className='btn btn-sm btn-circle btn-ghost absolute top-2 right-2'
                >
                    ✕
                </button>
                <form className='space-y-4 py-4'>
                    <h3 className='text-lg font-bold'>
                        Let&apos;s work together!
                    </h3>
                    <p className='pt-4 pb-2'>Cell: 502-299-6425</p>
                    <p className='pb-4'>Email: nledwa01@gmail.com</p>
                    {/* <SignUpField /> */}
                </form>
            </div>
            <label className='modal-backdrop' onClick={closeModal}></label>
        </dialog>
    );
}
