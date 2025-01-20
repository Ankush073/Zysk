import React from 'react';

const CTASection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Start your free trial
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Learn more
        </button>
        <button className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
          Get started
        </button>
      </div>
    </section>
  );
};

export default CTASection;