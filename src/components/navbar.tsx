import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white">About Me</Link>
        </li>
        <li>
          <Link href="/internships" className="text-white">Internships</Link>
        </li>
        <li>
          <Link href="/research" className="text-white">Research</Link>
        </li>
        <li>
          <Link href="/hobbies" className="text-white">Hobbies</Link>
        </li>
        <li>
          <Link href="/projects" className="text-white">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;