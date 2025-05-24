import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? 'text-primary' : 'text-gray-400'
      } hover:text-primary rounded-md text-sm font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
        isActive ? 'after:scale-x-100' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
