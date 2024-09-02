import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-#323232 p-4">
      <ul className="flex justify-center space-x-8">
        <li className="nav-circle">
          <Link href="/" className="text-#F0F0F0 hover:text-#FF3333">
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-circle">
          <Link href="/about" className="text-#F0F0F0 hover:text-#FF3333">
            <span>About Me</span>
          </Link>
        </li>
        <li className="nav-circle">
          <Link href="/internships" className="text-#F0F0F0 hover:text-#FF3333">
            <span>Internships</span>
          </Link>
        </li>
        <li className="nav-circle">
          <Link href="/research" className="text-#F0F0F0 hover:text-#FF3333">
            <span>Research</span>
          </Link>
        </li>
        <li className="nav-circle">
          <Link href="/hobbies" className="text-#F0F0F0 hover:text-#FF3333">
            <span>Hobbies</span>
          </Link>
        </li>
        <li className="nav-circle">
          <Link href="/projects" className="text-#F0F0F0 hover:text-#FF3333">
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-circle">
          <Link href="/contact" className="text-#F0F0F0 hover:text-#FF3333">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;