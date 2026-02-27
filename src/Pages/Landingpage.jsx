import React, { useState } from "react";
import { Menu, X, ChevronDown, Shield, HeadphonesIcon, CalendarCheck, Bike, Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react";
import logo from "../assets/aban_logo.png";
import hero2 from "../assets/hero2.png";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pickUpDate: '',
    returnDate: '',
    pickUpTime: '09:00',
    returnTime: '09:00'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Format the message
    const message = `*New Bike Rental Booking*%0A%0A
👤 *Full Name:* ${formData.fullName}%0A
📞 *Phone:* ${formData.phoneNumber}%0A
📅 *Pick-up Date:* ${formData.pickUpDate}%0A
📅 *Return Date:* ${formData.returnDate}%0A
⏰ *Pick-up Time:* ${formData.pickUpTime}%0A
⏰ *Return Time:* ${formData.returnTime}%0A%0A
_Booking requested via website_`;

    // WhatsApp number
    const whatsappNumber = "917025689644"; // Without + and spaces
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

      // Reset form after submission
  setFormData({
    fullName: '',
    phoneNumber: '',
    pickUpDate: '',
    returnDate: '',
    pickUpTime: '09:00',
    returnTime: '09:00'
  })
  };

  

  return (
    <div className="bg-zinc-950 text-white">
      {/* Navbar */}
<nav className="w-full bg-black/80 backdrop-blur-md text-white h-[90px] sticky top-0 z-50 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
    
    {/* Left - Logo + Name */}
    <a href="#hero">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Aban Bikes Logo"
          className="w-20 h-20 object-cover rounded-full"
        />
        <span className="text-3xl font-semibold">
          Aban Bikes
        </span>
      </div>
    </a>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#pricing" className="hover:text-yellow-400 transition">
        Pricing
      </a>
      <a href="#gallery" className="hover:text-yellow-400 transition">
        Gallery
      </a>
      <a href="#reviews" className="hover:text-yellow-400 transition">
        Review
      </a>
      <a href="#contact" className="hover:text-yellow-400 transition">
        Contact
      </a>

      {/* Service Hours Indicator */}
      <div className="flex items-center gap-1 text-sm text-gray-400 border-r border-white/20 pr-4">
        <Clock size={16} className="text-yellow-400" />
        <span>8am-8pm</span>
      </div>

      <a href="#contact">
        <button className="bg-yellow-500 w-30 h-10 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-600 transition">
          Book Now
        </button>
      </a>
    </div>

    {/* Mobile Hamburger */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {isOpen && (
    <div className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-6 space-y-4 border-t border-white/10">
      <a href="#pricing" className="block hover:text-yellow-400 pt-4">
        Pricing
      </a>
      <a href="#gallery" className="block hover:text-yellow-400">
        Gallery
      </a>
      <a href="#reviews" className="block hover:text-yellow-400">
        Review
      </a>
      <a href="#contact" className="block hover:text-yellow-400">
        Contact
      </a>

      <button className="bg-yellow-500 w-full h-10 text-black rounded-full font-medium hover:bg-yellow-600 transition">
        Book Now
      </button>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero2})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6">
          <div className="max-w-4xl mx-auto text-white text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ride Beyond <span className="text-yellow-400">Limits</span>
            </h1>

            <p className="mt-6 text-gray-300 text-xl max-w-2xl mx-auto">
              Experience the thrill of premium bike rentals. Choose your ride and
              conquer the road in style.
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <button className="h-[50px] min-w-[140px] px-8 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition">
                Explore Bikes
              </button>

              <button className="h-[50px] min-w-[140px] px-8 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
                View Pricing
              </button>
            </div>
          </div>
        </div>
         {/* <div className="absolute top-24 right-6 z-20 bg-black/80 border border-yellow-400/30 rounded-lg p-3 hidden md:block">
    <div className="flex items-center gap-2">
      <Clock className="text-yellow-400" size={18} />
      <span className="text-sm text-gray-300">Open: 8 AM - 8 PM</span>
    </div>
  </div> */}

        {/* Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer mb-22">
          <ChevronDown size={36} className="text-yellow-400 opacity-80" />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing</h2>
            <p className="text-gray-400">Choose the ride that fits your journey.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
            {/* Scooty Card */}
            <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-10 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition duration-300 flex-1 max-w-md">
              <h3 className="text-2xl font-semibold mb-4">Scooty</h3>
              <p className="text-gray-400 mb-2">Starting from</p>
              <div className="text-5xl font-bold text-yellow-400 mb-6">
                ₹599<span className="text-lg text-gray-400"> / day</span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-8 inline-block text-left">
                <li>✓ Comfortable city ride</li>
                <li>✓ Helmet included</li>
                <li>✓ Easy handling</li>
                <li>✓ Best for daily commute</li>
              </ul>
              <div>
                <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                  Book Now
                </button>
              </div>
            </div>

            {/* Premium Gear Bike Card */}
            <div className="bg-[#0B132B]/70 border border-yellow-400 rounded-2xl p-10 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition duration-300 relative flex-1 max-w-md">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 text-sm rounded-full font-semibold">
                Popular
              </span>
              <h3 className="text-2xl font-semibold mb-4">Premium Gear Bike</h3>
              <p className="text-gray-400 mb-2">Starting from</p>
              <div className="text-5xl font-bold text-yellow-400 mb-6">
                ₹1299<span className="text-lg text-gray-400"> / day</span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-8 inline-block text-left">
                <li>✓ High performance</li>
                <li>✓ Helmet included</li>
                <li>✓ Ideal for long rides</li>
                <li>✓ Premium riding experience</li>
              </ul>
              <div>
                <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400">Experience the best with our premium services</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Full Insurance Card */}
            <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-all duration-300">
                <Shield className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">Full Insurance</h3>
              <p className="text-gray-400">Comprehensive coverage included</p>
            </div>

            {/* 24/7 Support Card */}
            <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-all duration-300">
                <HeadphonesIcon className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">24/7 Support</h3>
              <p className="text-gray-400">Always here to help you</p>
            </div>

            {/* Easy Booking Card */}
            <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-all duration-300">
                <CalendarCheck className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">Easy Booking</h3>
              <p className="text-gray-400">Reserve in minutes</p>
            </div>

            {/* Premium Fleet Card */}
            <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-all duration-300">
                <Bike className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">Premium Fleet</h3>
              <p className="text-gray-400">Top-tier motorcycles only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet Gallery</h2>
            <p className="text-gray-400">Take a closer look at our premium motorcycle collection</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-2xl bg-[#0B132B]/70 border border-white/10 transition-all duration-300 ">
                <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-[#0e0e10]">
                  <img 
                    src={`/src/assets/vehicle${num}.jpeg`} 
                    alt={`Vehicle ${num}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section id="reviews" className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Rider Stories</h2>
      <p className="text-gray-400">What our adventurers say about their experience</p>
    </div>

    {/* Desktop Grid (3 columns) */}
    <div className="hidden md:grid md:grid-cols-3 gap-8">
      {/* Review 1 */}
      <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300">
        <div className="flex text-yellow-400 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-300 mb-6 text-center italic">
          "Rented the Adventure Tourer for a week-long trip through the mountains. The bike performed flawlessly and the unlimited mileage option was perfect. Already planning my next rental!"
        </p>
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 font-bold">RP</span>
          </div>
          <div>
            <h4 className="font-semibold">Rahul Patel</h4>
            <p className="text-sm text-gray-400">Adventure Rider</p>
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300">
        <div className="flex text-yellow-400 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-300 mb-6 text-center italic">
          "The Custom Cruiser was a dream to ride! Perfect condition, great insurance coverage, and the team was super helpful with route suggestions. Best rental experience in the city!"
        </p>
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 font-bold">SJ</span>
          </div>
          <div>
            <h4 className="font-semibold">Sarah Johnson</h4>
            <p className="text-sm text-gray-400">Weekend Cruiser</p>
          </div>
        </div>
      </div>

      {/* Review 3 */}
      <div className="bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300">
        <div className="flex text-yellow-400 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <p className="text-gray-300 mb-6 text-center italic">
          "As a first-time rider, I was nervous but the team at Aban Bikes made everything easy. The scooty was perfect for city rides, and the helmet and gear provided were top quality. Highly recommended!"
        </p>
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 font-bold">AK</span>
          </div>
          <div>
            <h4 className="font-semibold">Arjun Kumar</h4>
            <p className="text-sm text-gray-400">First-time Rider</p>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Horizontal Scroll (1 card visible, rest scrollable) */}
    <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
      <div className="flex gap-6 w-max">
        {/* Review 1 */}
        <div className="snap-center w-[85vw] max-w-sm bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300">
          <div className="flex text-yellow-400 mb-4 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 text-center italic">
            "Rented the Adventure Tourer for a week-long trip through the mountains. The bike performed flawlessly and the unlimited mileage option was perfect. Already planning my next rental!"
          </p>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 font-bold">RP</span>
            </div>
            <div>
              <h4 className="font-semibold">Rahul Patel</h4>
              <p className="text-sm text-gray-400">Adventure Rider</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="snap-center w-[85vw] max-w-sm bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300">
          <div className="flex text-yellow-400 mb-4 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 text-center italic">
            "The Custom Cruiser was a dream to ride! Perfect condition, great insurance coverage, and the team was super helpful with route suggestions. Best rental experience in the city!"
          </p>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 font-bold">SJ</span>
            </div>
            <div>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <p className="text-sm text-gray-400">Weekend Cruiser</p>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="snap-center w-[85vw] max-w-sm bg-[#0B132B]/70 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300">
          <div className="flex text-yellow-400 mb-4 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 text-center italic">
            "As a first-time rider, I was nervous but the team at Aban Bikes made everything easy. The scooty was perfect for city rides, and the helmet and gear provided were top quality. Highly recommended!"
          </p>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 font-bold">AK</span>
            </div>
            <div>
              <h4 className="font-semibold">Arjun Kumar</h4>
              <p className="text-sm text-gray-400">First-time Rider</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator for Mobile */}
    <div className="flex justify-center gap-2 mt-6 md:hidden">
      <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-400/30"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-400/30"></div>
    </div>
  </div>
</section>

     {/* Contact Section */}
<section id="contact" className="py-20 bg-zinc-950">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Journey</h2>
      <p className="text-gray-400">Book your ride in less than 2 minutes</p>
    </div>

    <div className="flex flex-col md:flex-row gap-12 justify-center">
      {/* Contact Form */}
      <form onSubmit={handleWhatsAppSubmit} className="space-y-6 w-full max-w-md">
        <div>
          <label className="block text-gray-400 mb-2">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-[#0B132B]/70 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-yellow-400 outline-none"
          />
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Phone Number</label>
          <input 
            type="tel" 
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
            className="w-full bg-[#0B132B]/70 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-yellow-400 outline-none"
          />
        </div>

        {/* Rental Date Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 mb-2">Pick-up Date</label>
            <input 
              type="date" 
              name="pickUpDate"
              value={formData.pickUpDate}
              onChange={handleChange}
              required
              className="w-full bg-[#0B132B]/70 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-yellow-400 outline-none [color-scheme:dark]"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Return Date</label>
            <input 
              type="date" 
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
              className="w-full bg-[#0B132B]/70 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-yellow-400 outline-none [color-scheme:dark]"
              min={formData.pickUpDate || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Time Selection */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 mb-2">Pick-up Time</label>
            <select 
              name="pickUpTime"
              value={formData.pickUpTime}
              onChange={handleChange}
              required
              className="w-full bg-[#0B132B]/70 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-yellow-400 outline-none"
            >
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="17:00">05:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Return Time</label>
            <select 
              name="returnTime"
              value={formData.returnTime}
              onChange={handleChange}
              required
              className="w-full bg-[#0B132B]/70 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-yellow-400 outline-none"
            >
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="17:00">05:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Book via WhatsApp
        </button>
      </form>

      {/* Contact Info */}
      <div className="space-y-6 w-full max-w-md">
        <div className="flex items-start gap-4">
          <Phone className="text-yellow-400 mt-1" size={24} />
          <div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-gray-400">9895505677, 8156844334</p>
            <p className="text-sm text-gray-500">Available 8 am - 8 pm</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-yellow-400 mt-1" size={24} />
          <div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-gray-400">ameennadiya256@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-yellow-400 mt-1" size={24} />
          <div>
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-gray-400">1234 Highway Route 66</p>
            <p className="text-sm text-gray-500">Los Angeles, CA 90001</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
{/* Footer */}
<footer className="bg-black py-12 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Company Info */}
      <div>
        <h3 className="text-xl font-bold mb-4">Aban Bikes</h3>
        <p className="text-gray-400">Premium motorcycle rentals for those who seek adventure.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
          <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
          <li><a href="#reviews" className="hover:text-yellow-400">Reviews</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Insurance</li>
          <li>Roadside Assistance</li>
          <li>Gear Rental</li>
          <li>GPS Navigation</li>
        </ul>
      </div>

      {/* Service Hours & Social */}
      <div>
        <h4 className="font-semibold mb-4">Service Hours</h4>
        <div className="space-y-3 text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-yellow-400" />
            <span className="font-medium text-white">Monday - Sunday</span>
          </div>
          <p className="text-2xl font-bold text-yellow-400">8 AM - 8 PM</p>
          <p className="text-sm text-gray-500">Available for bookings & support</p>
        </div>

        <h4 className="font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-4">
          <Facebook className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" size={24} />
          <Instagram className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" size={24} />
        </div>
      </div>
    </div>

    {/* Bottom Bar with Copyright and Quick Hours */}
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-400">
      <p>&copy; 2024 Aban Bikes. All rights reserved.</p>
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <Clock size={16} className="text-yellow-400" />
        <span className="text-sm">Operating Hours: 8:00 AM - 8:00 PM (Daily)</span>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default LandingPage;