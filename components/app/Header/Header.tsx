import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from '@/components';

export const Header = () => (
  <header className='flex items-center justify-between min-h-24 py-2 px-6'>
    <Link href='/'>
      <Image src='/icon.png' alt='Logo' height={64} width={64} priority />
    </Link>
    <nav>
      <NavLink href='/characters'>Characters</NavLink>
    </nav>
  </header>
);
