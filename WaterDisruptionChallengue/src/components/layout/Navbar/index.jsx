import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Your Logo
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}