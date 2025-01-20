import React from 'react';

const BlogPostsSection = () => {
  const posts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      image: '/api/placeholder/600/400',
      author: {
        name: 'Olivia Rhye',
        avatar: '/api/placeholder/40/40',
        date: '20 Jan 2024'
      }
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
      image: '/api/placeholder/600/400',
      author: {
        name: 'Phoenix Baker',
        avatar: '/api/placeholder/40/40',
        date: '19 Jan 2024'
      }
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      image: '/api/placeholder/600/400',
      author: {
        name: 'Lana Steiner',
        avatar: '/api/placeholder/40/40',
        date: '18 Jan 2024'
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-red-500 font-medium mb-2">Our blog</p>
          <h1 className="text-4xl font-bold text-gray-900">Latest blog posts</h1>
          <p className="text-gray-600 mt-2">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
          View all posts
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="group">
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div>
              <p className="text-red-500 font-medium mb-2">{post.category}</p>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-600 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-gray-600">{post.author.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsSection;