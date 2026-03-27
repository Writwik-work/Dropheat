import React from "react";
import "./FreshDeliveries.css";

/* SIDEBAR */
function FdSidebar() {
  return (
    <aside className="fd-sidebar">
      <div className="fd-sidebar__top">
        <button className="fd-sidebar__btn">⚡</button>
        <button className="fd-sidebar__btn">💬</button>
        <button className="fd-sidebar__btn">❓</button>
        <button className="fd-sidebar__btn">📊</button>
      </div>

      <div className="fd-sidebar__divider" />

      <div className="fd-sidebar__bottom">
        <button className="fd-sidebar__btn">𝕏</button>
        <button className="fd-sidebar__btn">📸</button>
        <button className="fd-sidebar__btn">🎵</button>
        <button className="fd-sidebar__btn">▶</button>
      </div>
    </aside>
  );
}

// ✅ PRODUCT IMAGES
import elec from "../../assets/fresh/elec.png";
import elec2 from "../../assets/fresh/elec2.png";
import elec3 from "../../assets/fresh/elec3.png";

import ps1 from "../../assets/fresh/ps1.png";
import ps2 from "../../assets/fresh/ps2.png";
import ps3 from "../../assets/fresh/ps3.png";

import wealth from "../../assets/fresh/wealth.png";
import wealth2 from "../../assets/fresh/wealth2.png";
import wealth3 from "../../assets/fresh/wealth3.png";

import tree from "../../assets/fresh/tree.png";
import serv from "../../assets/fresh/serv.png";

// ✅ AVATARS
import title from "../../assets/fresh/title.png";
import title2 from "../../assets/fresh/title-2.png";
import title3 from "../../assets/fresh/title-3.png";
import title4 from "../../assets/fresh/title-4.png";

// ✅ STARS
import stars from "../../assets/fresh/stars.png";

const data = [
  {
    id: 1,
    avatar: title,
    name: "Andr Grown",
    username: "@users9384",
    time: "3 hours ago",
    title: "Best service I ever used",
    desc: "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
    images: [ps1, ps2, ps3],
  },
  {
    id: 2,
    avatar: title2,
    name: "Andr Grown",
    username: "@users9384",
    time: "3 hours ago",
    title: "Best service I ever used",
    desc: "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
    images: [elec, elec2, elec3],
  },
  {
    id: 3,
    avatar: title3,
    name: "Andr Grown",
    username: "@users9384",
    time: "3 hours ago",
    title: "Best service I ever used",
    desc: "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
    images: [wealth, wealth2, wealth3],
  },
  {
    id: 4,
    avatar: title4,
    name: "Andr Grown",
    username: "@users9384",
    time: "3 hours ago",
    title: "Best service I ever used",
    desc: "It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment",
    images: [serv, tree, ps2],
  },
];

export default function FreshDeliveries() {
  return (
    <section className="fd-section">

      {/* SIDEBAR */}
      <FdSidebar />

      {/* BODY */}
      <div className="fd-body">
        <div className="fresh">

          {/* HEADER */}
          <div className="fresh-header">
            <div className="header-title-wrapper">
              <div className="fresh-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                </svg>
              </div>
              <h2>Fresh Deliveries</h2>
            </div>

            <p>
              Check out some of the hottest unboxings from our community! To appear
              on our page, tag us on Twitter when your item arrives.
            </p>
          </div>

          {/* CARDS */}
          <div className="fresh-container">
            {data.map((item) => (
              <div className="fresh-card" key={item.id}>

                {/* TOP */}
                <div className="fresh-top">
                  <div className="user">
                    <img src={item.avatar} alt="avatar" className="avatar" />
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.username}</span>
                    </div>
                  </div>
                  <span className="time">{item.time}</span>
                </div>

                {/* TITLE */}
                <h3>{item.title}</h3>

                {/* DESC */}
                <p className="desc">{item.desc}</p>

                {/* IMAGES */}
                <div className="fresh-images">
                  {item.images.map((img, i) => (
                    <img src={img} key={i} alt="product" />
                  ))}
                </div>

                {/* STARS */}
                <div className="stars">
                  <img src={stars} alt="rating" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}