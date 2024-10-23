// src/pages/Home/index.jsx
export default function Home() {
    const features = [
      {
        title: 'Feature 1',
        description: 'Description of your first amazing feature',
        icon: '🚀'
      },
      {
        title: 'Feature 2',
        description: 'Description of your second amazing feature',
        icon: '⚡'
      },
      {
        title: 'Feature 3',
        description: 'Description of your third amazing feature',
        icon: '💡'
      }
    ];
  
    return (
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover amazing features and solutions for your needs
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </section>
  
        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
  
        {/* Latest Updates Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold">New Feature Released</h3>
              <p className="text-gray-600">Check out our latest feature that helps you work smarter.</p>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold">Platform Update</h3>
              <p className="text-gray-600">We've improved our platform's performance.</p>
              <span className="text-sm text-gray-500">5 days ago</span>
            </div>
          </div>
        </section>
      </div>
    );
  }