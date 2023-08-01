import carLogo from "@/public/assets/car-img7.jpg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav className='flex mx-5 gap-4 my-5 items-center'>
      <Link href='/' className='text-center'>
        <div className=' w-20 h-20 rounded-full overflow-hidden border-2 border-gray-800'>
          <Image
            src={carLogo}
            alt='car-logo'
            className='logo h-full w-full object-cover'
          />
        </div>
      </Link>
      <div className='links flex justify-between gap-3 border-2 w-5/6 px-2 py-3 mx-auto'>
        <NavLink href='/car'>Cars</NavLink>
        <NavLink href='/community'>Community</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/car/share'>Share Car</NavLink>
        {/* <NavLink href='/car/random'>Any Car</NavLink> */}
      </div>
    </nav>
  );
};

export default Navigation;
