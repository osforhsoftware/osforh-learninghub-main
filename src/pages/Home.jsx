import React, { useEffect } from 'react';
import HomeHero from '../components/HomeHero.jsx';
import ExploreProgramsSection from '../components/ExploreProgramsSection.jsx';
import WhyChooseSection from '../components/WhyChooseSection.jsx';
import StudentReviewsSection from '../components/StudentReviewsSection.jsx';
import FacilitiesExperienceSection from '../components/FacilitiesExperienceSection.jsx';
import IndustryLeadersSection from '../components/IndustryLeadersSection.jsx';
import SkillCreatorsSection from '../components/SkillCreatorsSection.jsx';

export default function Home() {
  useEffect(() => {
    document.title = "Osforh Learning Hub | Courses & Career Training in Tirur";
    window.scrollTo(0, 0);
  }, []);

  // 2. Instructors data
  const instructors = [
    {
      initial: "R",
      name: "Ramees K.",
      role: "Lead Performance Marketer",
      xp: "8+ years client campaign experience"
    },
    {
      initial: "A",
      name: "Anees Rahman",
      role: "Creative Director & Brand Lead",
      xp: "10+ years agency & packaging experience"
    },
    {
      initial: "S",
      name: "Suhail V.P.",
      role: "Senior Full-Stack Developer",
      xp: "7+ years web apps & e-commerce builds"
    },
    {
      initial: "F",
      name: "Fathima Nihala",
      role: "Executive Operations & MIS Lead",
      xp: "6+ years corporate administration"
    }
  ];

  // 5. Learner reviews data
  const reviews = [
    {
      stars: "★★★★★",
      title: "Handled ₹2 Lakh live ad spend before graduation",
      text: "The practical ad budget sessions at Osforh gave me the confidence to handle Meta Ads for real clients. Placed as a performance marketer in Calicut within two weeks of finishing.",
      name: "Fathima Nihala",
      course: "Digital Marketing & AI Performance"
    },
    {
      stars: "★★★★★",
      title: "My design portfolio got me hired in Kochi",
      text: "Other institutes just teach tool shortcuts. Osforh taught me packaging design, grid systems, and brand psychology. The creative mentors helped me refine 5 full case studies.",
      name: "Rahul Krishna",
      course: "Graphic Design & Visual Identity"
    },
    {
      stars: "★★★★★",
      title: "From non-tech B.Com to junior frontend dev",
      text: "I was scared of programming, but the step-by-step method and desk mentors made JavaScript and React click. Launched three client sites during the course.",
      name: "Ananya Varma",
      course: "Full-Stack Website Development"
    },
    {
      stars: "★★★★★",
      title: "Best decision for career switch in Malappuram",
      text: "The mock interview drill and direct agency connections were game-changers. The trainers genuinely care about your career trajectory even after the batch ends.",
      name: "Mohammed Shafeeq",
      course: "Digital Marketing & AI Performance"
    },
    {
      stars: "★★★★★",
      title: "Advanced Excel and corporate polish",
      text: "The executive office admin course helped me master pivot tables, MIS reporting and professional correspondence. Secured an administrative role smoothly.",
      name: "Shilpa Raj",
      course: "Executive Office Administration"
    },
    {
      stars: "★★★★★",
      title: "Real agency client briefs, no dummy work",
      text: "Working with actual Kerala brand briefs prepared me for agency life in Dubai. Creative directors reviewed our work and gave honest, constructive feedback every week.",
      name: "Adil Roshan",
      course: "Visual Identity & Graphic Design"
    }
  ];

  return (
    <div className="hub-root">
      {/* New Reference-based Hero Section */}
      <HomeHero />

      {/* Why Choose Osforh Section */}
      <WhyChooseSection />


      {/* Explore Programs Section (Dual Offline & Online Cards matching Reference) */}
      <ExploreProgramsSection />


      {/* Student Reviews Section (1st Image) */}
      <StudentReviewsSection />



      {/* Discover the Best Learning Experience & Facilities (Model 1) */}
      <FacilitiesExperienceSection />

      {/* The Skill Creators - Mentors Showcase (Second to Last) */}
      <SkillCreatorsSection />

      {/* How We Are Creating Industry Leaders (Creative 10/10 Model) */}
      <IndustryLeadersSection />
    </div>
  );
}
