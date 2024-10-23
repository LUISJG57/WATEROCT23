export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p>© 2024 Your Company</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }