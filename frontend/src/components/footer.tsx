import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Overview', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Solutions', href: '#', isNew: true },
        { name: 'Tutorials', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Releases', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Media kit', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Newsletter', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'Help centre', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Support', href: '#' },
      ]
    },
    {
      title: 'Use cases',
      links: [
        { name: 'Startups', href: '#' },
        { name: 'Enterprise', href: '#' },
        { name: 'Government', href: '#' },
        { name: 'SaaS centre', href: '#' },
        { name: 'Marketplaces', href: '#' },
        { name: 'Ecommerce', href: '#' },
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'AngelList', href: '#' },
        { name: 'Dribbble', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Cookies', href: '#' },
        { name: 'Licenses', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
  ];

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {link.name}
                      {link.isNew && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          New
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <div>
            <a href="#" className="text-red-500">
              <svg className="h-8" viewBox="0 0 50 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM0 10a10 10 0 1120 0 10 10 0 01-20 0z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2077 zysktechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;