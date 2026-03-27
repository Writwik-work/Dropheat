import { useState, useEffect, useRef } from "react";
import "./Hero.css";

/* SIDEBAR */
import sidebar1 from "../../assets/hero/gift.png";
import sidebar2 from "../../assets/hero/Home.png";
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

const liveDrops = [
  { id: 1, img: drop1 },
  { id: 2, img: drop1 },
  { id: 3, img: drop1 },
  { id: 4, img: drop1 },
  { id: 5, img: drop1 },
  { id: 6, img: drop1 },
  { id: 7, img: drop1 },
  { id: 8, img: drop1 },
];

const sidebarItems = [
  { icon: sidebar2, label: "Home" },
  { icon: sidebar1, label: "Free" },
  { icon: sidebar3, label: "Boxes" },
  { icon: sidebar4, label: "Battle" },
  { icon: sidebar5, label: "Upgrade" },
];

const slides = ["hero", "refer"];

/* ── Reusable slide panels ── */
function MainPanel() {
  return (
    <div className="hero-panel hero-panel--main slide">
      <img src={heroBg} alt="" className="panel-bg" />
      <div className="panel-text">
        <h1>
          Sign Up today
          <br />
          and claim your
          <br />
          FREE box
        </h1>
        <p>
          Unlock YOUR Free Box Today! Each box is a treasure trove of excitement
          waiting to be discovered. Don't miss out – dive into the unknown with
          us!
        </p>
        <button className="btn-claim">Claim now</button>
      </div>
      <div className="panel-img-wrap">
        <img src={heroImg} alt="Free Box" className="panel-hero-img" />
        {/* <div className="free-badge-float">Free</div> */}
      </div>
    </div>
  );
}

function ReferPanel() {
  return (
    <div className="hero-panel hero-panel--refer slide">
      <img src={referBg} alt="" className="panel-bg panel-bg--lines" />
      <div className="refer-top">
        <h2>
          Earn up to 10% on deposits from your friends
        </h2>
        <span className="pct-badge">5%</span>
        <p>Give your friends a 5% bonus added to all their cash deposits</p>
        <button className="btn-refer">Refer a friend</button>
      </div>
      <div className="panel-img-wrap panel-img-wrap--refer">
        <img src={referImg} alt="Refer" className="panel-hero-img" />
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  return (
    <div className="hero-root">
      {/* ── SIDEBAR ── */}
      <aside className="hero-sidebar">
        <div className="sidebar-free-badge">Free</div>
        {sidebarItems.map((item, i) => (
          <button key={i} className={`sidebar-btn${i === 0 ? " active" : ""}`}>
            <img src={item.icon} alt={item.label} />
          </button>
        ))}
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="hero-content">
        {/* Live drops bar */}
        <div className="live-drops-bar">
          <span className="live-dot-label">
            <span className="live-dot" />
            <span className="live-drops-text">Live drops</span>
          </span>
          <div className="drops-track">
            {liveDrops.map((drop) => (
              <div className="drop-item" key={drop.id}>
                <img src={drop.img} alt="drop" className="drop-img" />
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE SLIDER ── */}
        {isMobile ? (
          <div className="hero-slider">
            <div
              className="hero-slider-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              <MainPanel />
              <ReferPanel />
            </div>
            <div className="slider-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${activeSlide === i ? " active" : ""}`}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── DESKTOP / TABLET PANELS ── */
          <div className="hero-panels">
            <MainPanel />
            <ReferPanel />
          </div>
        )}
      </div>
    </div>
  );
}