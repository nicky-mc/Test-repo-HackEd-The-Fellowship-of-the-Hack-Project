import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";

function Home() {
  return (
    <div className="page">

      <nav className="nav">
    <div className="title-wrapper">
        <div className="title">SoftSkills</div>
    </div>

    <div className="logo-wrapper">
        <div className="logo"></div>
    </div>
         <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
      </nav>

      <section className="text">
    <div className="intro-wrapper">
        <h1 className="intro">Welcome to Soft Skills</h1>
    </div>
    

    

<div className="columns">
  <div className="column">
    <h2>Daily Education</h2>
    <a href="/TechSkills" className="btn">Explore</a>
  </div>

  <div className="divider"></div>

  <div className="column">
    <h2>Basic Skills</h2>
    <a href="/SoftSkills" className="btn">Explore</a>
  </div>
</div>
</section>

<div className="paragraph-wrapper">
    <div className="paragraph">
        Welcome to side by side learning space one built on the belief that education should be open, accessible, and free for everyone.
        This platform was created to remove the limits that traditional systems often place on knowledge, giving people from all backgrounds the
        opportunity to learn, grow, and discover without barriers. Here, information is not a privilege; it’s a shared resource shaped by curiosity,
        community, and the desire to create a better future.
        Whether you’re here to explore new subjects, strengthen existing skills, or simply follow your passion for 
        learning, you’ll find a place designed to support your journey every step of the way. Together, we’re building a world where education is not restricted by cost, location, or circumstance—but powered by openness, inclusion, and the idea that everyone deserves the chance to thrive.
    </div>
</div>

      <section className="about">
        <h3>About Us</h3>
        <p>
          📍 Address:
Northstar Creative Studio
742 Evergreen Terrace, Suite 210
Brookdale, CA 90210

📞 Phone: (555) 827-3491

📧 Email: hello@northstarcreativestudio.co

🌐 Website: www.northstarcreativestudio.co

🕒 Business Hours:
Monday – Friday: 9:00 AM – 6:00 PM
Saturday – Sunday: Closed
        </p>
      </section>
    </div>
  );
}

export default Home;