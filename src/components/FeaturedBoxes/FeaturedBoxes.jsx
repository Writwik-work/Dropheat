import { useState } from "react";
import "./FeaturedBoxes.css";

/* SIDEBAR PNG ICONS */
import sidebar1 from "../../assets/hero/Home.png";
import sidebar2 from "../../assets/hero/gift.png";
import sidebar3 from "../../assets/hero/treasure-chest 1.png";
import sidebar4 from "../../assets/hero/crown.png";
import sidebar5 from "../../assets/hero/sword.png";

/* BOX IMAGES */
import box1 from "../../assets/feautred-boxes/crazy.png";
import box2 from "../../assets/feautred-boxes/card.png";
import box3 from "../../assets/feautred-boxes/crazy-2.png";
import box4 from "../../assets/feautred-boxes/crazy-3.png";
import box5 from "../../assets/feautred-boxes/crazy-4.png";

/* SECTION ICON */
import sectionIcon from "../../assets/feautred-boxes/fb-header-icon.png";

/* 🔥 TOP SIDEBAR (PNG) */
const SIDEBAR_ICONS = [
  sidebar1,
  sidebar2,
  sidebar3,
  sidebar4,
  sidebar5,
];

/* 🔥 SOCIAL SIDEBAR (SVG - KEEP) */
const SIDEBAR_SOCIAL = [
  {
    label: "Twitter / X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.961l4.264 5.635L18.244 2.25z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.89 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1-.06z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

/* 🔥 SIDEBAR COMPONENT */
function FbSidebar() {
  return (
    <aside className="fb-sidebar">

      {/* TOP ICONS (PNG) */}
      <div className="fb-sidebar__top">
        {SIDEBAR_ICONS.map((icon, i) => (
          <button key={i} className="fb-sidebar__btn">
            <img src={icon} alt="sidebar icon" />
          </button>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="fb-sidebar__divider" />

      {/* SOCIAL ICONS (SVG) */}
      <div className="fb-sidebar__social">
        {SIDEBAR_SOCIAL.map((item) => (
          <a key={item.label} href="#" className="fb-sidebar__btn">
            {item.icon}
          </a>
        ))}
      </div>

    </aside>
  );
}

export default FbSidebar;