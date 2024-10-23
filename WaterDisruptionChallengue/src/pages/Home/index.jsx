// src/pages/Home/index.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: 'Interactive UI',
      description: 'Beautiful and responsive user interfaces',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Secure',
      description: 'Built with security in mind',
      icon: '🔒'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Section with Animation */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover amazing features and possibilities
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg
            hover:bg-blue-700 transition-colors"
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Animated Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all
              ${activeFeature === feature.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-white hover:shadow-xl'}`}
            onClick={() => setActiveFeature(
              activeFeature === feature.id ? null : feature.id
            )}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className={activeFeature === feature.id 
              ? 'text-blue-50' 
              : 'text-gray-600'
            }>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Stats Section */}
      <motion.section
        className="bg-white rounded-lg shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Users', value: '10K+' },
            { label: 'Countries', value: '50+' },
            { label: 'Projects', value: '100+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}