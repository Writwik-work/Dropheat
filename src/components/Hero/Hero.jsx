import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

/* SIDEBAR */
import sidebar1 from "../../assets/hero/Home.png";
import sidebar2 from "../../assets/hero/gift.png";
import sidebar3 from "../../assets/hero/treasure-chest 1.png";
import sidebar4 from "../../assets/hero/crown.png";
import sidebar5 from "../../assets/hero/sword.png";

/* DROPS */
import drop1 from "../../assets/hero/hero-header.png";

/* HERO IMAGES */
import heroImg from "../../assets/hero/hero-img.png";
import referImg from "../../assets/hero/hero-2.png";

/* BACKGROUND */
import heroBg from "../../assets/hero/earth.png";
import referBg from "../../assets/hero/lines.png";

const sidebarItems = [
  { id: 1, img: sidebar1, label: "Home", active: true },
  { id: 2, img: sidebar2, label: "Gifts" },
  { id: 3, img: sidebar3, label: "Treasure" },
  { id: 4, img: sidebar4, label: "Crown" },
  { id: 5, img: sidebar5, label: "Battle" },
];

const heroSlides = [{ id: 1 }, { id: 2 }];

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const autoSlideRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  const goToSlide = (i) => {
    clearInterval(autoSlideRef.current);
    setSlideIndex(i);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      setSlideIndex((prev) =>
        diff > 0
          ? (prev + 1) % heroSlides.length
          : (prev - 1 + heroSlides.length) % heroSlides.length
      );
    }
    touchStartX.current = null;
  };

  /* ── Card components ── */
  const SignupCard = () => (
    <div className="hero__card hero__card--signup">
      {/* Signup-specific bg class */}
      <img src={heroBg} alt="" className="hero__card-bg hero__card-bg--signup" />

      {/* Title + desc pinned to TOP */}
      <div className="hero__card-top">
        <h1 className="hero__title">
          Sign Up today
          <br />
          and claim your
          <br />
          <span className="hero__title-highlight">FREE box</span>
        </h1>
        <p className="hero__desc">
          Unlock YOUR Free Box Today! Each box is a treasure trove of excitement
          waiting to be discovered. Don't miss out – dive into the unknown with us!
        </p>
      </div>

      {/* CTA pinned to BOTTOM */}
      <div className="hero__card-bottom">
        <button className="hero__cta hero__cta--purple">Claim now</button>
      </div>

      {/* Floating product image */}
      <div className="hero__card-img-wrap hero__card-img-wrap--signup">
        <img src={heroImg} alt="Free Box" />
        <span className="hero__badge hero__badge--green hero__badge--box">Free</span>
        <span className="hero__badge hero__badge--green hero__badge--windy">
           <span>Free</span>
        </span>
      </div>
    </div>
  );

  const ReferCard = () => (
    <div className="hero__card hero__card--refer">
      {/* Refer-specific bg class */}
      <img src={referBg} alt="" className="hero__card-bg hero__card-bg--refer" />

      {/* Title + desc pinned to TOP */}
      <div className="hero__card-top hero__card-top--refer">
        <h2 className="hero__title hero__title--refer">
          Earn up to 10% on
          <br />
          deposits from
          <br />
          your friends
          <span className="hero__badge hero__badge--pink hero__badge--inline">5%</span>
        </h2>
        <p className="hero__desc hero__desc--refer">
          Give your friends a 5% bonus added to all their cash deposits
        </p>
      </div>

      {/* CTA pinned to BOTTOM */}
      <div className="hero__card-bottom">
        <button className="hero__cta hero__cta--green">Refer a friend</button>
      </div>

      {/* Floating refer image */}
      <div className="hero__card-img-wrap hero__card-img-wrap--refer">
        <img src={referImg} alt="Refer a friend" />
      </div>
    </div>
  );

  return (
    <div className="hero__page">
      {/* SIDEBAR */}
      <aside className="hero__sidebar">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={`hero__sidebar-item${item.active ? " hero__sidebar-item--active" : ""}`}
            aria-label={item.label}
          >
            <img src={item.img} alt={item.label} />
          </button>
        ))}
      </aside>

      {/* MAIN */}
      <main className="hero__main">
        <div className="hero__container">

          {/* LIVE DROPS — label above, slider starts immediately below */}
          <div className="hero__drops-label">
            <span className="hero__drops-dot" />
            Live drops
          </div>
          <div className="hero__drops-track-wrap">
            <div className="hero__drops-marquee">
              <img src={drop1} alt="Live drops" className="hero__drops-img" />
              <img src={drop1} alt="Live drops" className="hero__drops-img" aria-hidden="true" />
            </div>
          </div>

          {/* HERO CARDS */}
          <div
            className="hero__cards"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop */}
            <div className="hero__cards-desktop">
              <SignupCard />
              <ReferCard />
            </div>

            {/* Mobile / Tablet slider */}
            <div className="hero__cards-slider">
              <div
                className="hero__slider-track"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                <div className="hero__slide"><SignupCard /></div>
                <div className="hero__slide"><ReferCard /></div>
              </div>
              <div className="hero__slider-dots">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`hero__dot${i === slideIndex ? " hero__dot--active" : ""}`}
                    onClick={() => goToSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}