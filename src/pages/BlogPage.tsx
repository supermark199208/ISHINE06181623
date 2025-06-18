import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of IPL Hair Removal Technology: What's Coming Next",
      excerpt: "Discover the latest innovations in IPL technology that are revolutionizing the beauty industry. From AI-powered skin analysis to advanced cooling systems, explore how these breakthroughs are making hair removal more effective, safer, and accessible to everyone. Learn about the cutting-edge features that will define the next generation of IPL devices.",
      image: "https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "OEM vs ODM: Choosing the Right Manufacturing Partnership for Your Beauty Brand",
      excerpt: "Understanding the differences between OEM and ODM manufacturing models is crucial for beauty brands looking to enter the IPL market. This comprehensive guide breaks down the pros and cons of each approach, helping you make informed decisions about product development, cost management, and time-to-market strategies for your beauty device business.",
      image: "https://images.pexels.com/photos/5938322/pexels-photo-5938322.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Michael Zhang",
      date: "December 12, 2024",
      category: "Manufacturing",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Quality Control in IPL Device Manufacturing: Ensuring Safety and Efficacy",
      excerpt: "Dive deep into the rigorous quality control processes that ensure IPL devices meet international safety standards. From component testing to final product validation, learn about the comprehensive testing protocols, certifications, and quality assurance measures that protect consumers and build brand trust in the competitive beauty device market.",
      image: "https://images.pexels.com/photos/6663461/pexels-photo-6663461.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      category: "Quality",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Market Trends: The Growing Demand for At-Home Beauty Devices",
      excerpt: "The at-home beauty device market is experiencing unprecedented growth, driven by consumer preferences for convenience and professional-grade results. Analyze market data, consumer behavior patterns, and emerging trends that are shaping the future of the beauty industry. Discover opportunities for brands to capitalize on this expanding market segment.",
      image: "https://images.pexels.com/photos/5938393/pexels-photo-5938393.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "James Wilson",
      date: "December 8, 2024",
      category: "Market Analysis",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Sustainable Manufacturing: Eco-Friendly Practices in IPL Device Production",
      excerpt: "Environmental responsibility is becoming increasingly important in manufacturing. Explore how leading IPL device manufacturers are implementing sustainable practices, from eco-friendly materials and energy-efficient production processes to waste reduction and recycling programs. Learn how sustainability can be a competitive advantage in the beauty industry.",
      image: "https://images.pexels.com/photos/5938394/pexels-photo-5938394.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Lisa Thompson",
      date: "December 5, 2024",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Regulatory Compliance: Navigating Global Standards for Beauty Devices",
      excerpt: "Successfully launching IPL devices in global markets requires understanding complex regulatory landscapes. This guide covers FDA requirements, CE marking, and other international standards. Learn about the certification processes, documentation requirements, and compliance strategies that ensure your products meet regulatory standards worldwide.",
      image: "https://images.pexels.com/photos/6663459/pexels-photo-6663459.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Robert Kim",
      date: "December 3, 2024",
      category: "Compliance",
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "Custom Branding Strategies for IPL Device Manufacturers",
      excerpt: "Building a strong brand identity in the competitive IPL market requires strategic thinking and creative execution. Explore effective branding strategies, from logo design and packaging to marketing messaging and customer experience. Learn how successful brands differentiate themselves and build lasting relationships with their target audiences.",
      image: "https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Amanda Foster",
      date: "November 30, 2024",
      category: "Branding",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "The Science Behind IPL Technology: How Light-Based Hair Removal Works",
      excerpt: "Understanding the scientific principles behind IPL technology is essential for manufacturers and consumers alike. Explore the physics of light absorption, melanin targeting, and hair growth cycles. Learn about wavelength optimization, pulse duration, and energy density parameters that determine treatment effectiveness and safety in IPL devices.",
      image: "https://images.pexels.com/photos/5938322/pexels-photo-5938322.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "Dr. Kevin Park",
      date: "November 28, 2024",
      category: "Science",
      readTime: "10 min read"
    },
    {
      id: 9,
      title: "Supply Chain Management in Beauty Device Manufacturing",
      excerpt: "Efficient supply chain management is critical for successful IPL device manufacturing. Learn about supplier selection, inventory management, logistics optimization, and risk mitigation strategies. Discover how leading manufacturers build resilient supply chains that ensure consistent quality, timely delivery, and cost-effective production at scale.",
      image: "https://images.pexels.com/photos/6663461/pexels-photo-6663461.jpeg?auto=compress&cs=tinysrgb&w=540",
      author: "David Chen",
      date: "November 25, 2024",
      category: "Supply Chain",
      readTime: "8 min read"
    }
  ];

  const categories = [
    "All",
    "Technology",
    "Manufacturing", 
    "Quality",
    "Market Analysis",
    "Sustainability",
    "Compliance",
    "Branding",
    "Science",
    "Supply Chain"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Technology": "bg-blue-100 text-blue-800",
      "Manufacturing": "bg-green-100 text-green-800",
      "Quality": "bg-purple-100 text-purple-800",
      "Market Analysis": "bg-orange-100 text-orange-800",
      "Sustainability": "bg-emerald-100 text-emerald-800",
      "Compliance": "bg-red-100 text-red-800",
      "Branding": "bg-pink-100 text-pink-800",
      "Science": "bg-indigo-100 text-indigo-800",
      "Supply Chain": "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IPL Manufacturing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and innovations in IPL device manufacturing. 
              Expert articles covering technology, quality control, market analysis, and industry best practices.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Blog Image - 540x360 pixels */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                    style={{ width: '540px', height: '360px' }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      <Tag className="h-3 w-3 inline mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-8">
                  {/* Meta Information */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Blog Excerpt - 8 lines */}
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-8" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Read Time and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    
                    {/* Read More CTA Button */}
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on IPL technology and manufacturing trends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;