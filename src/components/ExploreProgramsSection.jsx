import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreProgramsSection.css';

const OSFORH_PROGRAMS = [
  {
    id: 'dm',
    name: 'Digital Marketing & AI',
    offline: {
      title: 'Best Digital Marketing Offline Course',
      desc: 'Digital marketing offline course of 4 months duration is filled with updated module which provides internship training and certificate. We provide 30+ modules like AI and Graphic design.',
      chips: ['4 Months Practical', '₹2 Lakh+ Real Ad Spend', 'Tirur Campus', 'Internship & Certification'],
      link: '/programs#dm'
    },
    online: {
      title: 'Best Digital Marketing Online Course',
      desc: 'Here is a chance to study from anywhere at your convenient time. Comprehensive live practical training with certified performance marketing mentors.',
      features: [
        'Flexible Learning From Anywhere',
        'Live Doubt-Clearing & Mentorship',
        'Access to Recorded Sessions'
      ],
      link: '/programs#dm'
    }
  },
  {
    id: 've',
    name: 'Video Editing & AI',
    offline: {
      title: 'Best Video Editing & AI Offline Course',
      desc: 'Hands-on 2 months studio training mastering Premiere Pro, CapCut, After Effects, DaVinci Resolve and AI video generation tools with real film & client edits.',
      chips: ['2 Months Studio Practical', '4K High-End Lab', 'Tirur Campus', 'Portfolio Edits'],
      link: '/programs#ve'
    },
    online: {
      title: 'Best Video Editing Online Course',
      desc: 'Master cinematic color grading, sound design, and viral short-form edits from anywhere with live project files and weekly mentor reviews.',
      features: [
        'Real Raw Project Footage Provided',
        'Weekly 1-on-1 Mentor Feedback',
        'Lifetime Editing Assets & LUTs'
      ],
      link: '/programs#ve'
    }
  },
  {
    id: 'gd',
    name: 'Graphic Designing',
    offline: {
      title: 'Best Graphic Designing Offline Course',
      desc: 'Visual communication, packaging design, branding, typography, Canva, Photoshop, Illustrator and InDesign taught practically over 3 months.',
      chips: ['3 Months Practical', 'Brand Identity Focus', 'Tirur Campus', 'Agency Reviews'],
      link: '/programs#gd'
    },
    online: {
      title: 'Best Graphic Designing Online Course',
      desc: 'Build a comprehensive commercial design portfolio with 5 client-ready case studies and live critiques directly from creative directors.',
      features: [
        'Live Brand Brief Workshops',
        'Creative Director Feedback',
        'Industry Portfolio Preparation'
      ],
      link: '/programs#gd'
    }
  },
  {
    id: 'wd',
    name: 'Website Development',
    offline: {
      title: 'Best Web Development Offline Course',
      desc: 'From responsive web fundamentals (HTML, CSS, JavaScript) to Full-Stack MERN Development (React, Node.js, Express, MongoDB) in 4 or 6 months.',
      chips: ['4 or 6 Months', 'Full MERN Stack', 'Tirur Campus', 'Live Project Deploys'],
      link: '/programs#wd'
    },
    online: {
      title: 'Best Web Development Online Course',
      desc: 'Ship real-world web applications and API backends with code-along repositories, Git workflows, and step-by-step mentor guidance.',
      features: [
        'Personal Code Reviews & GitHub Sprints',
        'Live Cloud & Database Deployments',
        'Frontend to Full Stack Architecture'
      ],
      link: '/programs#wd'
    }
  },
  {
    id: 'oa',
    name: 'Office Administration',
    offline: {
      title: 'Best Office Administration Offline Course',
      desc: 'Practical 3 months corporate office training covering advanced MS Office, Excel pivot tables, MIS reporting, documentation, and executive communication.',
      chips: ['3 Months Practical', 'Advanced Excel & MIS', 'Tirur Campus', 'Corporate Ready'],
      link: '/programs#oa'
    },
    online: {
      title: 'Best Executive Office Admin Online Course',
      desc: 'Upgrade your corporate administrative proficiency and executive reporting skills flexibly online with interactive business scenarios.',
      features: [
        'Corporate MIS & Spreadsheet Lab',
        'Executive Email & Letter Drafting',
        'Official Certification & Career Polish'
      ],
      link: '/programs#oa'
    }
  }
];

export default function ExploreProgramsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProg = OSFORH_PROGRAMS[activeTab] || OSFORH_PROGRAMS[0];

  return (
    <section className="osforh-programs-sec" id="programs" aria-label="Explore Our Programs">
      <div className="osforh-programs-container">
        {/* Top Location Heading matching reference "Calicut" */}
        <div className="programs-top-location">
          Tirur · Malappuram
        </div>

        <h2 className="programs-sec-title">
          Explore Our Career <span>Programs</span>
        </h2>
        <p className="programs-sec-subtitle">
          Choose between immersive in-person classroom studio training or interactive remote learning with Osforh mentors.
        </p>

        {/* Program Selection Pills */}
        <div className="program-selector-pills" role="tablist" aria-label="Select course">
          {OSFORH_PROGRAMS.map((prog, idx) => (
            <button
              key={prog.id}
              role="tab"
              aria-selected={idx === activeTab}
              className={`prog-pill-btn ${idx === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {prog.name}
            </button>
          ))}
        </div>

        {/* Dual Cards Grid matching reference layout */}
        <div className="dual-program-cards-grid">
          {/* 1. Left Card: Offline In-Campus Course (Pure White) */}
          <article className="program-card-offline">
            <div>
              <h3 className="card-header-title">
                {currentProg.offline.title}
              </h3>
              <p className="card-desc">
                {currentProg.offline.desc}
              </p>

              {/* Meta Chips */}
              <div className="card-meta-chips">
                {currentProg.offline.chips.map((chip, i) => (
                  <span key={i} className="chip">{chip}</span>
                ))}
              </div>
            </div>

            <div>
              {/* Divider line matching reference */}
              <div className="card-divider-line"></div>

              {/* Bottom Row: Emblem Icon and Action */}
              <div className="card-bottom-row">
                {/* Concentric rings emblem icon matching reference */}
                <div className="offline-card-emblem" aria-hidden="true">
                  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8" />
                    <circle cx="20" cy="20" r="4" fill="#A7CB05" />
                  </svg>
                </div>

                <Link to={currentProg.offline.link} className="offline-card-action-btn">
                  View offline batch →
                </Link>
              </div>
            </div>
          </article>

          {/* 2. Right Card: Online Interactive Course (Deep Osforh Emerald/Teal) */}
          <article className="program-card-online">
            <div className="card-online-content">
              <div>
                <h3 className="card-header-title">
                  {currentProg.online.title}
                </h3>
                <p className="card-desc">
                  {currentProg.online.desc}
                </p>
              </div>

              {/* Checklist rows with arrows & divider lines matching reference */}
              <div className="card-online-features-list">
                {currentProg.online.features.map((feat, i) => (
                  <div key={i} className="online-feature-row">
                    <span className="feature-arrow">→</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="online-card-action-row">
                <Link to={currentProg.online.link} className="online-card-action-btn">
                  Enroll Online →
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Bar: Contact Us Pill and Full Syllabus Link */}
        <div className="programs-bottom-bar">
          <Link to="/contact" className="programs-contact-pill">
            <span className="pill-icon">💬</span>
            <span>Contact us</span>
          </Link>

          <Link to="/programs" className="programs-view-all-link">
            Compare all 5 program syllabi &amp; schedules →
          </Link>
        </div>
      </div>
    </section>
  );
}
