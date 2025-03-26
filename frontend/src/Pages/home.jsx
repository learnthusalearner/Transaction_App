import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="bg-blue-700 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
            <div>
              <h1 className="text-white text-xl font-bold">Transaction App</h1>
              <p className="text-blue-200 text-sm italic">Fast, Secure, Reliable</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => navigate('/signup')} className="text-white hover:text-blue-300">
              Sign Up
            </button>
            <button onClick={() => navigate('/signin')} className="text-white hover:text-blue-300">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-white font-bold mb-4">Manage Your Transactions</h2>
          <p className="text-blue-100 text-xl mb-8">
            Secure, instant money transfers across 50+ countries
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded shadow"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="border border-white text-white hover:text-blue-200 font-semibold py-3 px-6 rounded shadow"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-lock fa-3x"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Bank-Level Security</h4>
              <p className="text-gray-600">
                256-bit encryption and biometric authentication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-bolt fa-3x"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Transfers</h4>
              <p className="text-gray-600">
                Real-time transactions with 99.9% uptime.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-globe fa-3x"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Global Coverage</h4>
              <p className="text-gray-600">
                Send & receive in 50+ currencies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Trusted by Thousands</h3>
          <blockquote className="max-w-2xl mx-auto italic text-gray-600 mb-4">
            "Transaction App revolutionized our financial operations. The platform's simplicity
            combined with enterprise-grade security makes it our top choice for global payments."
          </blockquote>
          <p className="font-semibold text-blue-600">— Sarah Johnson, CFO at TechGlobal</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h4 className="text-white font-bold text-lg">Transaction App</h4>
            <p className="text-blue-200 text-sm mt-1">
              © 2023 Transaction App. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => navigate('/privacy')}
              className="text-blue-200 hover:text-white"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-blue-200 hover:text-white"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-200 hover:text-white"
            >
              Contact Support
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
