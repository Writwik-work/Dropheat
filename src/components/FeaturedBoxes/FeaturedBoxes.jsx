import { useState } from "react";
import "./FeaturedBoxes.css";

/* ── Box images ── */
import box1 from "../../assets/feautred-boxes/crazy.png";
import box2 from "../../assets/feautred-boxes/card.png";
import box3 from "../../assets/feautred-boxes/crazy-2.png";
import box4 from "../../assets/feautred-boxes/crazy-3.png";
import box5 from "../../assets/feautred-boxes/crazy-4.png";

/* ── Section icon ── */
import sectionIcon from "../../assets/feautred-boxes/fb-header-icon.png";

/* ─────────────────────────────────────────
   DATA & TABS
───────────────────────────────────────── */
const TABS = ["Featured Boxes", "New Boxes", "Top Boxes"];

// Updated Sort Options
const SORT_OPTIONS = [
  "Default",
  "Price: Low to High", 
  "Price: High to Low", 
  "Name: A-Z", 
  "Popularity", 
  "New Arrival"
];

// 1. Featured Tab Data 
const FEATURED_BOXES = [
  { id: 1,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box1, badges: ["New","Hot","Popular"], btnLabel: "Open case" },
  { id: 2,  name: "Card Trader",     tags: ["Streetwear","Watches"], price: 50,  img: box2, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 3,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box3, badges: [],                      btnLabel: "Open Box"  },
  { id: 4,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box4, badges: ["Hot"],                 btnLabel: "Open Box"  },
  { id: 5,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box5, badges: ["New"],                 btnLabel: "Open Box"  },
  { id: 6,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box1, badges: [],                      btnLabel: "Open case" },
  { id: 7,  name: "Card Trader",     tags: ["Streetwear","Watches"], price: 50,  img: box2, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 8,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box3, badges: [],                      btnLabel: "Open Box"  },
  { id: 9,  name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box4, badges: [],                      btnLabel: "Open Box"  },
  { id: 10, name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 390, img: box5, badges: ["New"],                 btnLabel: "Open case" },
];

// 2. New Boxes Tab Data 
const NEW_BOXES = [
  { id: 11, name: "Sneaker Head",    tags: ["Shoes", "Apparel"],     price: 15,  img: box3, badges: ["New"],                 btnLabel: "Open Box"  },
  { id: 12, name: "Mystery Tech",    tags: ["Electronics"],          price: 25,  img: box5, badges: ["New", "Hot"],          btnLabel: "Open Box"  },
  { id: 13, name: "Card Trader",     tags: ["Streetwear","Watches"], price: 10,  img: box2, badges: ["New"],                 btnLabel: "Open Box"  },
  { id: 14, name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 100, img: box1, badges: ["New"],                 btnLabel: "Open case" },
  { id: 15, name: "Hype Beast",      tags: ["Streetwear","Watches"], price: 45,  img: box4, badges: ["New"],                 btnLabel: "Open Box"  },
  { id: 16, name: "Sneaker Head",    tags: ["Shoes", "Apparel"],     price: 15,  img: box3, badges: ["New"],                 btnLabel: "Open Box"  },
  { id: 17, name: "Mystery Tech",    tags: ["Electronics"],          price: 25,  img: box5, badges: ["New"],                 btnLabel: "Open Box"  },
  { id: 18, name: "Card Trader",     tags: ["Streetwear","Watches"], price: 10,  img: box2, badges: ["New", "Popular"],      btnLabel: "Open Box"  },
  { id: 19, name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 100, img: box1, badges: ["New"],                 btnLabel: "Open case" },
  { id: 20, name: "Hype Beast",      tags: ["Streetwear","Watches"], price: 45,  img: box4, badges: ["New"],                 btnLabel: "Open Box"  },
];

// 3. Top Boxes Tab Data 
const TOP_BOXES = [
  { id: 21, name: "Luxury Vault",    tags: ["Watches", "Jewelry"],   price: 999, img: box4, badges: ["Popular", "Hot"],      btnLabel: "Open Box"  },
  { id: 22, name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 750, img: box1, badges: ["Popular"],             btnLabel: "Open case" },
  { id: 23, name: "Card Trader",     tags: ["Streetwear","Watches"], price: 500, img: box2, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 24, name: "High Roller",     tags: ["Exclusive"],            price: 1500,img: box5, badges: ["Popular", "Hot"],      btnLabel: "Open Box"  },
  { id: 25, name: "Sneaker Grail",   tags: ["Shoes", "Apparel"],     price: 850, img: box3, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 26, name: "Luxury Vault",    tags: ["Watches", "Jewelry"],   price: 999, img: box4, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 27, name: "Crazy Designers", tags: ["Streetwear","Watches"], price: 750, img: box1, badges: ["Popular", "Hot"],      btnLabel: "Open case" },
  { id: 28, name: "Card Trader",     tags: ["Streetwear","Watches"], price: 500, img: box2, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 29, name: "High Roller",     tags: ["Exclusive"],            price: 1500,img: box5, badges: ["Popular"],             btnLabel: "Open Box"  },
  { id: 30, name: "Sneaker Grail",   tags: ["Shoes", "Apparel"],     price: 850, img: box3, badges: ["Popular"],             btnLabel: "Open Box"  },
];

const BADGE_CLASS = { New: "badge--new", Hot: "badge--hot", Popular: "badge--popular" };

/* ─────────────────────────────────────────
   SIDEBAR ICONS (inline SVG)
───────────────────────────────────────── */
const SIDEBAR_TOP = [
  {
    label: "Announcements",
    icon: <svg viewBox="0 0 24 24" fill="none"><path d="M3 9.5h14M3 14.5h14M17 5l4 7-4 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Messages",
    icon: <svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Help",
    icon: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M12 16v-.5M12 13a2 2 0 10-2-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  },
  {
    label: "Activity",
    icon: <svg viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

const SIDEBAR_SOCIAL = [
  {
    label: "Twitter / X",
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.961l4.264 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>,
  },
  {
    label: "Instagram",
    icon: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  },
  {
    label: "TikTok",
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.89 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1-.06z"/></svg>,
  },
  {
    label: "YouTube",
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
];

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */
function FbSidebar() {
  return (
    <aside className="fb-sidebar">
      <div className="fb-sidebar__top">
        {SIDEBAR_TOP.map((item) => (
          <button key={item.label} className="fb-sidebar__btn" title={item.label}>
            {item.icon}
          </button>
        ))}
      </div>
      <div className="fb-sidebar__divider" />
      <div className="fb-sidebar__social">
        {SIDEBAR_SOCIAL.map((item) => (
          <a key={item.label} href="#" className="fb-sidebar__btn" title={item.label}>
            {item.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}

function Badge({ label }) {
  return <span className={`badge ${BADGE_CLASS[label] ?? ""}`}>{label}</span>;
}

function BoxCard({ box }) {
  const whole = Math.floor(box.price);
  const cents = (box.price % 1).toFixed(2).slice(1);
  return (
    <div className="box-card">
      <div className="box-card__badges">
        {box.badges.map((b) => <Badge key={b} label={b} />)}
      </div>
      <div className="box-card__img-wrap">
        <img src={box.img} alt={box.name} className="box-card__img" />
      </div>
      <div className="box-card__body">
        <p className="box-card__name">{box.name}</p>
        <div className="box-card__tags">
          {box.tags.map((t) => <span key={t} className="box-card__tag">{t}</span>)}
        </div>
        <p className="box-card__price">
          ${whole}<span className="box-card__price-cents">{cents}</span>
        </p>
        <div className="box-card__actions">
          <button className="btn-open">{box.btnLabel}</button>
          <button className="btn-info">Info</button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function FeaturedBoxes() {
  const [activeTab, setActiveTab] = useState("Featured Boxes"); 
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy]     = useState("Default"); // Pre-used default filter

  const getBoxesToDisplay = () => {
    switch (activeTab) {
      case "New Boxes":
        return NEW_BOXES;
      case "Top Boxes":
        return TOP_BOXES;
      case "Featured Boxes":
      default:
        return FEATURED_BOXES;
    }
  };

  // 1. Get the current array based on the tab
  const baseArray = getBoxesToDisplay();
  
  // 2. Create a copy of the array and sort it based on user selection
  const sortedBoxes = [...baseArray].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Name: A-Z":
        return a.name.localeCompare(b.name);
      case "Popularity":
        // Sorts items with the "Popular" badge to the very front
        const aPop = a.badges.includes("Popular") ? 1 : 0;
        const bPop = b.badges.includes("Popular") ? 1 : 0;
        return bPop - aPop;
      case "New Arrival":
        // Sorts items with the "New" badge to the very front
        const aNew = a.badges.includes("New") ? 1 : 0;
        const bNew = b.badges.includes("New") ? 1 : 0;
        return bNew - aNew;
      case "Default":
      default:
        // Returns 0 to keep the array in its original original layout
        return 0; 
    }
  });

  return (
    <section className="fb-section">
      <FbSidebar />

      <div className="fb-body">
        <div className="fb-header">
          <div className="fb-header__title">
          <div className="header__icon">
            <img src={sectionIcon} alt="" className="fb-header__icon" />
            </div>
            <h2>{activeTab}</h2>
          </div>

          <div className="fb-header__tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`fb-tab${activeTab === tab ? " fb-tab--active" : ""}`}
                onClick={() => {
                  setActiveTab(tab);
                  setSortBy("Default"); // Optional: resets the sort when changing tabs!
                }}
              >
                {tab === "Featured Boxes" ? "Featured" : tab}
              </button>
            ))}
          </div>

          <div className="fb-sort">
            <span className="fb-sort__label">Sort by:</span>
            <div className="fb-sort__dropdown">
              <button className="fb-sort__btn" onClick={() => setSortOpen((p) => !p)}>
                {/* Dynamically show the selected sort state, but keep it short if needed */}
                {sortBy === "Default" ? "Default" : sortBy}
                <svg className={`fb-sort__chevron${sortOpen ? " open" : ""}`} viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {sortOpen && (
                <ul className="fb-sort__menu">
                  {SORT_OPTIONS.map((opt) => (
                    <li key={opt}>
                      <button
                        className={`fb-sort__option${sortBy === opt ? " active" : ""}`}
                        onClick={() => { setSortBy(opt); setSortOpen(false); }}
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* 3. Map over the sorted array instead of the raw one */}
        <div className="fb-grid">
          {sortedBoxes.map((box) => <BoxCard key={box.id} box={box} />)}
        </div>
      </div>
    </section>
  );
}