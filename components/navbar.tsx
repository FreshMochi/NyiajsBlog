// Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='w-screen relative h-20 bg-blue-800'>
      <ul className='w-max absolute top-0 right-10 flex space-x-4'>
        <li className='m-0 p-0'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='m-0 p-0'>
          <Link href="/about">
        About
          </Link>
        </li>
        <li className='m-0 p-0'>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li className='m-0 p-0'>
          <Link href="/blogs">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
