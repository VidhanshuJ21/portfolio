import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">Let's Connect</h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Get in touch</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
              Feel free to reach out if you'd like to connect!
            </p>
          </div>
          
          <div className="space-y-3">
            <p className="text-gray-300">📧 jadhavvidhanshu@gmail.com</p>
            <p className="text-gray-300">📱 +91 9881441558</p>
            <p className="text-gray-300">📍 Pune, India</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
              <span className="text-white font-bold text-sm">in</span>
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
              <span className="text-white font-bold text-sm">@</span>
            </div>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                required
              />
            </div>
            
            <div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                required
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 min-h-[120px]"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold w-full"
            >
              SEND
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};