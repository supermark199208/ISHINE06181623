import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    projectType: '',
    quantity: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      info: "info@iplmanufacturer.com",
      subInfo: "Response within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      info: "+86-15900283962",
      subInfo: "Mon-Fri 9AM-6PM (GMT+8)"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      info: "Shenzhen, Guangdong, China",
      subInfo: "Factory tours available"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      info: "24 hours",
      subInfo: "Quote turnaround: 24-48 hours"
    }
  ];

  const projectTypes = [
    "New IPL Development",
    "Logo Printing",
    "Compliance"
  ];

  const quantities = [
    "Sample (1-10 units)",
    "Small Batch (10-100 units)",
    "Medium Order (100-1K units)",
    "Large Order (1K-10K units)",
    "Mass Production (10K+ units)"
  ];

  const timelines = [
    "Rush (< 2 weeks)",
    "Standard (2-4 weeks)",
    "Flexible (1-2 months)",
    "Long-term (≥3+ months)"
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your inquiry has been submitted successfully. Our team will review your requirements 
              and get back to you within 24 hours with a detailed response.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Custom
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Quote Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What's in your mind? Let's talk!
            Fill out this form to get the process started. We'll be in touch within 24hrs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-700">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose iShine?</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 15+ years manufacturing experience</li>
                  <li>• Global quality certifications</li>
                  <li>• Flexible order quantities</li>
                  <li>• Fast quote turnaround</li>
                  <li>• Dedicated project managers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Numbers
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your phone numbers"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Range *
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select quantity</option>
                      {quantities.map((qty, index) => (
                        <option key={index} value={qty}>{qty}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Describe your needs here*"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Quote Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;