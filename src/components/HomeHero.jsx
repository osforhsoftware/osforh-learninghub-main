import React from 'react';
import { Link } from 'react-router-dom';
import teamPerson1 from '../img/team-person-1.png';
import teamPerson2 from '../img/team-person-2.png';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="osforh-hero-wrapper" aria-label="Hero Introduction">
      <div className="osforh-hero-container">
        {/* Left Column: Osforh Real Content with Reference Layout */}
        <div className="osforh-hero-content">
          {/* Google Star Rating Badge (from Reference Design) */}
          <div className="google-rating-card">
            <div className="rating-score-box">
              <span className="score">4.9</span>
              <span className="label">Star Rating</span>
            </div>

            <div className="rating-stars-box">
              {/* Google Brand SVG */}
              <div className="google-brand-logo">
                <svg width="68" height="22" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                  <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                  <path d="M209.75 26.34v39.46c0 16.23-9.62 22.87-20.94 22.87-10.63 0-16.94-7.09-19.34-12.87l8.47-3.53c1.51 3.59 5.21 7.66 10.87 7.66 7.1 0 11.51-4.36 11.51-12.59v-3.11h-.34c-2.14 2.61-6.26 4.96-11.47 4.96-10.92 0-20.84-9.49-20.84-22.14 0-12.73 9.92-22.27 20.84-22.27 5.21 0 9.33 2.35 11.47 4.92h.34v-3.86h9.66zm-8.99 20.92c0-7.81-5.21-13.52-11.93-13.52-6.8 0-12.51 5.71-12.51 13.52 0 7.73 5.71 13.36 12.51 13.36 6.72 0 11.93-5.63 11.93-13.36z" fill="#4285F4"/>
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                  <path d="M262.02 54.49l7.56 5.04c-2.44 3.61-8.32 9.83-18.49 9.83-12.61 0-22.02-9.75-22.02-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 19 14.12l1.01 2.52-29.41 12.18c2.27 4.45 5.8 6.72 10.76 6.72 4.96 0 8.4-2.44 10.67-6.05zm-13.28-8.24l19.66-8.15c-1.09-2.77-4.29-4.71-8.15-4.71-4.96 0-11.85 4.37-11.51 12.86z" fill="#EA4335"/>
                  <path d="M35.64 41.56V30.82h35.79c.35 1.84.58 4.01.58 6.37 0 7.85-2.13 17.75-9.04 24.66-6.73 6.96-15.35 10.69-27.33 10.69C16.29 72.54 0 56.25 0 36.27 0 16.29 16.29 0 35.64 0c10.67 0 18.29 4.18 24.03 9.66l-6.8 6.8c-4.1-3.86-9.66-6.89-17.23-6.89-13.95 0-24.87 11.34-24.87 25.29 0 13.95 10.92 25.29 24.87 25.29 8.99 0 14.12-3.61 17.4-6.89 1.8-1.8 3-4.33 3.49-7.9H35.64z" fill="#4285F4"/>
                </svg>
              </div>

              {/* 5 Golden Stars */}
              <div className="stars-row" aria-label="5 out of 5 stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>

          {/* Osforh Verified Tagline / Location Eyebrow */}
          <div className="hero-tagline-eyebrow">
            OSFORH LEARNING HUB · TIRUR
          </div>

          {/* Osforh Real Headline with Reference Design Styling */}
          <h1 className="hero-main-title">
            Digital Marketing &amp; AI<br />
            Run <span className="highlight">live campaigns</span>
          </h1>

          {/* Osforh Verified Description */}
          <p className="hero-description-text">
            Social media, SEO, search engine marketing, e-commerce and AI tools over 4 months.
          </p>

          {/* Student Value Pillars Checklist */}
          <div className="hero-pillars-row">
            <div className="pillar-item">
              <span className="pillar-icon">⏳</span>
              <span>Get Skilled</span>
            </div>
            <div className="pillar-item">
              <span className="pillar-icon">💼</span>
              <span>Get Certified</span>
            </div>
            <div className="pillar-item">
              <span className="pillar-icon">📈</span>
              <span>Get Hired</span>
            </div>
            <div className="pillar-item">
              <span className="pillar-icon">💻</span>
              <span>Online &amp; Offline</span>
            </div>
          </div>

          {/* Dual Action CTAs from Osforh */}
          <div className="hero-cta-group">
            <Link to="/programs#dm" className="btn-primary-enroll">
              Explore programs
            </Link>
            <Link to="/contact" className="btn-secondary-consult">
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* Right Column: Genuine Company Duo with Hand-Drawn Doodles */}
        <div className="osforh-hero-visual">
          {/* Hand-drawn Doodles accurately placed matching the reference */}
          
          {/* 1. Sparkle Stars (Above Head 1) */}
          <svg className="doodle doodle-sparkle-1" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
          </svg>

          {/* 2. Doodled Speech / Thought Bubble (Above Head 2) */}
          <svg className="doodle doodle-speech-bubble" width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 28c0-9 9-16 20-16s20 7 20 16-9 16-20 16c-3.2 0-6.2-.6-8.8-1.8L12 46l2.2-7.4C12.8 35.6 12 31.9 12 28z" />
          </svg>

          {/* 3. Doodled Accent Lines above left head */}
          <svg className="doodle doodle-head-accents" width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M8 12 C10 8, 14 6, 16 6" />
            <path d="M6 18 C8 13, 12 10, 16 9" />
          </svg>

          {/* 4. Doodled Hashtag (Left Side) */}
          <svg className="doodle doodle-hash" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" />
          </svg>

          {/* 5. Doodled Zigzag growth arrow (Right Side) */}
          <svg className="doodle doodle-zigzag" width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 34 L18 20 L28 28 L40 14" />
            <polyline points="32 14 40 14 40 22" />
          </svg>

          {/* 6. Doodled Loop arrow (Left Bottom) */}
          <svg className="doodle doodle-loop-arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 18 C10 8, 34 8, 34 22 C34 32, 22 36, 14 30 L8 36" />
          </svg>

          {/* 7. Doodled Wavy accent marks (Right Bottom) */}
          <svg className="doodle doodle-wavy" width="40" height="28" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 8 Q10 2, 16 8 T28 8 T36 8" />
            <path d="M4 16 Q10 10, 16 16 T28 16 T36 16" />
          </svg>

          {/* Team Duo Photography Layer */}
          <div className="hero-team-duo">
            {/* Person 1 (Back / Left) */}
            <div className="team-person person-back">
              <img
                src={teamPerson1}
                alt="Osforh Mentor & Industry Expert"
                className="team-cutout-img"
                loading="eager"
              />
            </div>

            {/* Person 2 (Front / Right) */}
            <div className="team-person person-front">
              <img
                src={teamPerson2}
                alt="Osforh Lead Trainer"
                className="team-cutout-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Slider Edge Navigation Indicator */}
      <button 
        type="button" 
        className="hero-slider-edge-arrow" 
        aria-label="Next slide"
        onClick={() => {
          const programsSec = document.getElementById('programs');
          if (programsSec) programsSec.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        ›
      </button>
    </section>
  );
}
