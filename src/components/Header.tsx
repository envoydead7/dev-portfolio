import Link from 'next/link';

export default function Header() {
return (
    <header className='py-6'>
        <nav className='container mx-auto flex items-center justify-between'>
            <Link href='/' className="text-xl font-bold">
            Ma. 
            </Link>
            <div className='flex space-x-6'>
                <Link href='/About' className='text-gray-700 hover:text-gray-900'>About</Link>
                <Link href='/Projects' className='text-gray-700 hover:text-gray-900'>Projects</Link>
                <Link href='/Contact' className='text-gray-700 hover:text-gray-900'>Contact</Link>
                <Link href='/Blog' className='text-gray-700 hover:text-gray-900'>Blog</Link>
                <Link href='/Travel' className='text-gray-700 hover:text-gray-900'>Travel</Link>
            </div>
        </nav>
    </header>
);

}