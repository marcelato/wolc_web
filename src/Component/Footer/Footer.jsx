import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <div className="mb-6">
            <img
              src="https://github.com/rolandoto/image-pms/blob/main/PNG/LG-AZUL.png?raw=true"
              alt="Logo"
              className="h-16"
            />
          </div>
        </div>
        <div>
          <h4 className="text-black font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h4 className="text-black font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Submit ticket</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="text-black font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h4 className="text-black font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>
      {/* Newsletter */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h4 className="text-black font-semibold">Subscribe to our newsletter</h4>
          <p className="text-sm text-gray-600">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-500">
            Subscribe
          </button>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-600">© 2024 Your Company, Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Social Media Icons */}
          <a href="#" aria-label="Facebook" className="hover:text-indigo-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-indigo-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="X (Twitter)" className="hover:text-indigo-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-indigo-600">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-indigo-600">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
