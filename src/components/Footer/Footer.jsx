import React from "react";
import "./Footer.css";

/* SIDEBAR */
function FooterSidebar() {
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

// ✅ your images
import stars from "../../assets/footer/stars.png"; 
import twitter from "../../assets/footer/x.png"; 
import insta from "../../assets/footer/insta.png";
import tiktok from "../../assets/footer/tiktok.png";
import youtube from "../../assets/footer/youtube.png";

export default function Footer() {
  return (
    <section className="footer-section">

      {/* SIDEBAR */}
      <FooterSidebar />

      {/* BODY */}
      <div className="footer-body">
        <footer className="footer">
          <div className="footer-inner">
            
            {/* LEFT */}
            <div className="footer-left">
              <img src={stars} alt="rating" />
            </div>

            {/* CENTER LINKS */}
            <div className="footer-links">
              <a href="#">AML Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Contact</a>
              <a href="#">Terms Of Service</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">Provably Fair</a>
              <a href="#">Privacy Statement</a>
            </div>

            {/* RIGHT */}
            <div className="footer-right">
              <img src={twitter} alt="twitter" />
              <img src={insta} alt="instagram" />
              <img src={tiktok} alt="tiktok" />
              <img src={youtube} alt="youtube" />
            </div>

          </div>
        </footer>
      </div>

    </section>
  );
}