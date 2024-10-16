import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <header className='flex items-center justify-between min-h-24 py-2 px-6'>
    <Link href='/'>
      <Image src='/icon.png' alt='Logo' height={64} width={64} />
    </Link>
    <nav className='font-sigmar text-xl text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:bg-primary after:rounded after:w-full after:opacity-0 after:transition-opacity hover:after:opacity-100'>
      <Link href='/characters'>Characters</Link>
    </nav>
  </header>
);
