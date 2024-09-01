import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white">About Me</a>
          </Link>
        </li>
        <li>
          <Link href="/internships">
            <a className="text-white">Internships</a>
          </Link>
        </li>
        <li>
          <Link href="/research">
            <a className="text-white">Research</a>
          </Link>
        </li>
        <li>
          <Link href="/volunteer">
            <a className="text-white">Volunteer</a>
          </Link>
        </li>
        <li>
          <Link href="/school-clubs">
            <a className="text-white">School Clubs</a>
          </Link>
        </li>
        <li>
          <Link href="/hobbies">
            <a className="text-white">Hobbies</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="text-white">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-white">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;