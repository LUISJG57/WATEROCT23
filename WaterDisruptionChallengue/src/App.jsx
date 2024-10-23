// src/App.jsx
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavLink from './components/layout/NavLink';  // Make sure to import NavLink

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">
                  My Website
                </Link>
              </div>
              
              {/* Navigation Links - Now using NavLink component */}
              <div className="flex items-center space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog">Blog</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <AppRoutes />
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-lg mt-8">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="text-center text-gray-600">
              © 2024 My Website. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;