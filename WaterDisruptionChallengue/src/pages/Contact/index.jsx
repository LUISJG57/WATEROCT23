// src/pages/Contact/index.jsx
export default function Contact() {
    return (
      <div className="space-y-8">
        {/* Contact Hero */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Get in touch with us!
          </p>
        </section>
  
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>
  
          {/* Contact Information */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Business Street</p>
                <p className="text-gray-600">City, Country 12345</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p className="text-gray-600">Saturday & Sunday: Closed</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }