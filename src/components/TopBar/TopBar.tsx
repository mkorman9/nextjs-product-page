import {FaBlender} from 'react-icons/fa';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="flex w-screen h-16 justify-evenly text-gray-100 items-center m-0">
      <div className="flex max-lg:ml-4">
        <FaBlender size={38} color="white"/>
        <span className="ml-2 font-bold text-2xl">Blendify</span>
      </div>

      <nav className="flex gap-10 max-lg:hidden">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/help">Help</Link>
        <Link href="/careers">Careers</Link>
      </nav>
      <div className="flex ml-auto lg:hidden">
        <HamburgerMenu/>
      </div>
    </div>
  );
};

export default TopBar;
