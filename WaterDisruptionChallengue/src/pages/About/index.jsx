// src/pages/About/index.jsx
export default function About() {
    const team = [
      {
        name: 'John Doe',
        role: 'CEO',
        image: 'https://via.placeholder.com/150',
        description: 'Leading our vision forward'
      },
      {
        name: 'Jane Smith',
        role: 'CTO',
        image: 'https://via.placeholder.com/150',
        description: 'Technical innovation leader'
      },
      {
        name: 'Mike Johnson',
        role: 'Design Lead',
        image: 'https://via.placeholder.com/150',
        description: 'Creating beautiful experiences'
      }
    ];
  
    return (
      <div className="space-y-8">
        {/* About Hero */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            We're on a mission to create amazing experiences and solve real problems.
          </p>
        </section>
  
        {/* Our Story */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2024, we started with a simple idea: make technology work better for everyone.
              Since then, we've grown into a team of passionate individuals working towards this goal.
            </p>
            <p>
              Our journey has been marked by innovation, challenges, and breakthrough moments that have
              shaped who we are today.
            </p>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Values */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new possibilities.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }