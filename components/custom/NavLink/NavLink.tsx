'use client';

import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/libs/utils';

export interface NavLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  className,
  href,
  ...props
}) => {
  const path = usePathname();
  const active = path.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'font-sigmar text-xl text-primary relative',
        'after:absolute after:-bottom-1 after:left-0 after:h-1 after:bg-primary after:rounded after:w-full',
        'after:opacity-0 after:transition-opacity hover:after:opacity-100',
        active && 'after:opacity-100',
        className
      )}
      {...props}
    />
  );
};
