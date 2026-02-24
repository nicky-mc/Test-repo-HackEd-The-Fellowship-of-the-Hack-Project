import React from "react";
import "./index.css"; // Ensure Tailwind CSS is imported
import { Link } from "react-router-dom"; // Use Link instead of 'a' tags

function Home() {
  return (
    <div className="min-h-screen bg-sbs-light font-sans flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-sbs-dark text-white px-8 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          {/* Ensure your logo.png is in the public folder, or update this path */}
          <img
            src="./images/logo.png"
            alt="Side by Side Logo"
            className="h-12 w-12 bg-white rounded-full p-1"
          />
          <div className="text-2xl font-bold tracking-wider">
            Side by Side Learning
          </div>
        </div>

        <div className="hidden md:flex gap-2">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 rounded-l-md text-sbs-dark focus:outline-none"
          />
          <button className="bg-sbs-mid px-4 py-2 rounded-r-md font-bold hover:bg-blue-600 transition">
            Search
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sbs-dark mb-12">
          Welcome to Side by Side Learning
        </h1>

        {/* The 3 Course Columns */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Column 1: Basic Skills */}
          <div className="bg-sbs-mid text-white p-8 rounded-xl w-72 shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Basic Skills</h2>
            <p className="text-sm mb-6 text-center opacity-90">
              Practical maths and budgeting tools for everyday UK life.
            </p>
            <Link
              to="./BasicSkills"
              className="mt-auto bg-sbs-light text-sbs-dark px-6 py-3 rounded-lg font-bold hover:bg-white transition w-full text-center"
            >
              Explore
            </Link>
          </div>

          {/* Column 2: Tech Skills */}
          <div className="bg-sbs-mid text-white p-8 rounded-xl w-72 shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Tech Skills</h2>
            <p className="text-sm mb-6 text-center opacity-90">
              Digital safety, avoiding scams, and testing password strength.
            </p>
            <Link
              to="/TechSkills"
              className="mt-auto bg-sbs-light text-sbs-dark px-6 py-3 rounded-lg font-bold hover:bg-white transition w-full text-center"
            >
              Explore
            </Link>
          </div>

          {/* Column 3: Soft Skills */}
          <div className="bg-sbs-mid text-white p-8 rounded-xl w-72 shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
            <p className="text-sm mb-6 text-center opacity-90">
              Translating formal English, CV prep, and professional emails.
            </p>
            <Link
              to="/SoftSkills"
              className="mt-auto bg-sbs-light text-sbs-dark px-6 py-3 rounded-lg font-bold hover:bg-white transition w-full text-center"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement (From your original code) */}
      <div className="bg-white py-16 px-6 shadow-inner mt-8">
        <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-sbs-dark font-medium">
          <p className="mb-4">
            Welcome to <span className="font-bold">Side by Side Learning</span>,
            a space built on the belief that education should be open,
            accessible, and free for everyone.
          </p>
          <p className="mb-4">
            This platform was created to remove the limits that traditional
            systems often place on knowledge, giving people from all backgrounds
            the opportunity to learn, grow, and discover without barriers. Here,
            information is not a privilege; it’s a shared resource shaped by
            curiosity, community, and the desire to create a better future.
          </p>
          <p>
            Whether you’re here to explore new subjects, strengthen existing
            skills, or simply follow your passion for learning, you’ll find a
            place designed to support your journey every step of the way.
            Together, we’re building a world where education is not restricted
            by cost, location, or circumstance but powered by openness,
            inclusion, and the idea that everyone deserves the chance to thrive.
          </p>
        </div>
      </div>

      {/* Footer / About Us */}
      <footer className="bg-sbs-dark text-white py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="opacity-80">
              Building a world where education is not restricted by cost,
              location, or circumstance.
            </p>
          </div>
          <div className="text-sm opacity-90 leading-loose">
            <p>
              📍 Northstar Creative Studio, 742 Evergreen Terrace, Suite 210,
              Brookdale, CA 90210
            </p>
            <p>📞 Phone: (555) 827-3491</p>
            <p>📧 Email: hello@northstarcreativestudio.co</p>
            <p>🕒 Mon – Fri: 9:00 AM – 6:00 PM | Sat – Sun: Closed</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
