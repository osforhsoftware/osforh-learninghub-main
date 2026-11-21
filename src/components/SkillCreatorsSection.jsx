import React, { useRef, useState, useEffect } from 'react';
import afsalImg from '../img/mentors/afsal.png';
import shabeebImg from '../img/mentors/shabeeb.png';
import arshadImg from '../img/mentors/arshad.png';
import musthaqImg from '../img/mentors/musthaq.png';
import umaibanuImg from '../img/mentors/umaibanu.png';
import './SkillCreatorsSection.css';

const SKILL_CREATORS = [
  {
    id: 'afsal',
    name: 'Afsal',
    role: 'Video Editing & Graphic Design Mentor',
    img: afsalImg
  },
  {
    id: 'shabeeb',
    name: 'Shabeeb',
    role: 'Web Development Mentor',
    img: shabeebImg
  },
  {
    id: 'arshad',
    name: 'Arshad',
    role: 'Digital Marketing Mentor',
    img: arshadImg
  },
  {
    id: 'musthaq',
    name: 'Musthaq',
    role: 'Digital Marketing Mentor',
    img: musthaqImg
  },
  {
    id: 'umaibanu',
    name: 'Umaibanu',
    role: 'Graphic Design Mentor',
    img: umaibanuImg
  }
];

export default function SkillCreatorsSection() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const hasOverflow = scrollWidth > clientWidth + 8;
    setCanScroll(hasOverflow);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, []);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 280;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScrollState, 350);
  };

  const onScrollUpdate = () => {
    if (!scrollRef.current) return;
    checkScrollState();
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const dotIndex = Math.min(
      SKILL_CREATORS.length - 1,
      Math.max(0, Math.round(progress * (SKILL_CREATORS.length - 1)))
    );
    setActiveDot(dotIndex);
  };

  return (
    <section className="skill-creators-sec" aria-label="The Skill Creators">
      <div className="skill-creators-container">
        {/* Section Header */}
        <div className="skill-creators-header">
          <h2 className="skill-creators-title">The Skill Creators</h2>
        </div>

        {/* Carousel / Cards Track */}
        <div className="skill-creators-slider-wrap">
          {/* Prev Arrow - Only displayed when content overflows / requires scrolling */}
          {canScroll && (
            <button
              type="button"
              className={`creators-slider-arrow prev ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => handleScroll('left')}
              aria-label="Previous mentors"
              disabled={!canScrollLeft}
            >
              ‹
            </button>
          )}

          <div
            className="skill-creators-cards-row"
            ref={scrollRef}
            onScroll={onScrollUpdate}
          >
            {SKILL_CREATORS.map((mentor) => (
              <article key={mentor.id} className="mentor-card">
                {/* Photo Frame */}
                <div className="mentor-photo-frame">
                  {/* Subtle decorative background circles watermark */}
                  <svg className="mentor-frame-watermark" viewBox="0 0 100 100" fill="none">
                    <circle cx="30" cy="50" r="28" stroke="#ffffff" strokeWidth="6" />
                    <circle cx="70" cy="50" r="28" stroke="#ffffff" strokeWidth="6" />
                  </svg>

                  {/* Cutout Portrait with White Contour Sticker Effect */}
                  <img
                    src={mentor.img}
                    alt={`${mentor.name} - ${mentor.role}`}
                    className="mentor-cutout-photo"
                    loading="lazy"
                  />
                </div>

                {/* Card Details */}
                <div className="mentor-card-body">
                  <div className="mentor-info-text">
                    <h3 className="mentor-name">{mentor.name}</h3>
                    <p className="mentor-role">{mentor.role}</p>
                  </div>

                  {/* Decorative circle arrow indicator matching reference (no redirection) */}
                  <span className="mentor-action-btn" aria-hidden="true">
                    ›
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Next Arrow - Only displayed when content overflows / requires scrolling */}
          {canScroll && (
            <button
              type="button"
              className={`creators-slider-arrow next ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => handleScroll('right')}
              aria-label="Next mentors"
              disabled={!canScrollRight}
            >
              ›
            </button>
          )}
        </div>

        {/* Indicator Dots - Only rendered when content is scrollable */}
        {canScroll && (
          <div className="creators-dots" role="tablist" aria-label="Mentor pagination">
            {SKILL_CREATORS.map((_, idx) => (
              <button
                key={idx}
                className={`creators-dot ${idx === activeDot ? 'active' : ''}`}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                  const target = (maxScroll / (SKILL_CREATORS.length - 1)) * idx;
                  scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
                  setActiveDot(idx);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
