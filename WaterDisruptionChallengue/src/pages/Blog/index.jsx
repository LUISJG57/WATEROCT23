// src/pages/Blog/index.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building awesome applications.",
      date: "2024-03-20",
      category: "Tutorial",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
      content: "React is a powerful library for building user interfaces..."
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Deep dive into Tailwind CSS and its utility-first approach.",
      date: "2024-03-18",
      category: "CSS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      content: "Tailwind CSS provides a utility-first approach to styling..."
    },
    {
      id: 3,
      title: "JavaScript Best Practices",
      excerpt: "Essential best practices for modern JavaScript development.",
      date: "2024-03-15",
      category: "JavaScript",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
      content: "Writing clean and maintainable JavaScript code is crucial..."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Blog Hero */}
      <motion.section 
        className="bg-white shadow-lg rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600">
          Latest news, tutorials, and updates
        </p>
      </motion.section>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            layoutId={`post-${post.id}`}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
              ${expandedId === post.id ? 'md:col-span-2 lg:col-span-3' : ''}`}
            onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mt-2 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">
                {expandedId === post.id ? post.content : post.excerpt}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {expandedId === post.id ? 'Read Less' : 'Read More'}
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}