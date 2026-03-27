import React, { useState } from 'react';
import './LatestBattles.css';
import { battlesData } from './LatestBattlesData';

/* SIDEBAR */
function LbSidebar() {
  return (
    <aside className="lb-sidebar">
      <div className="lb-sidebar__top">
        <button className="lb-sidebar__btn">⚡</button>
        <button className="lb-sidebar__btn">💬</button>
        <button className="lb-sidebar__btn">❓</button>
        <button className="lb-sidebar__btn">📊</button>
      </div>

      <div className="lb-sidebar__divider" />

      <div className="lb-sidebar__bottom">
        <button className="lb-sidebar__btn">𝕏</button>
        <button className="lb-sidebar__btn">📸</button>
        <button className="lb-sidebar__btn">🎵</button>
        <button className="lb-sidebar__btn">▶</button>
      </div>
    </aside>
  );
}

export default function LatestBattles() {
  const [showAll, setShowAll] = useState(false);
  const displayedBattles = showAll ? battlesData : battlesData.slice(0, 6);

  return (
    <section className="lb-section">

      <LbSidebar />

      <div className="lb-body">

        {/* HEADER */}
        <div className="lb-header">
          <div className="lb-title-group">
            <span className="lb-icon">⚔️</span>
            <h2>Latest Battles</h2>
          </div>

          <button 
            className="lb-view-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        </div>

        {/* LIST */}
        <div className="lb-list">
          {displayedBattles.map((battle) => (
            <div className="lb-card" key={battle.id}>
              
              {/* PLAYERS */}
              <div className="lb-players">
                <div className="lb-team">
                  <img src={battle.players[0]} className="lb-avatar" />
                  <img src={battle.players[1]} className="lb-avatar" />
                </div>

                <div className="lb-vs">⚔️</div>

                <div className="lb-team">
                  <img src={battle.players[2]} className="lb-avatar" />
                  <img src={battle.players[3]} className="lb-avatar" />
                </div>
              </div>

              {/* ITEMS */}
              <div className="lb-items">
                {battle.items.map((itemImg, idx) => (
                  <div className="lb-item-box" key={idx}>
                    <img src={itemImg} alt="" />
                  </div>
                ))}

                {/* ✅ FIX: END SPACE */}
                <div className="lb-end-space" />
              </div>

              {/* ACTIONS */}
              <div className="lb-actions">
                <div className="lb-price">
                  ${battle.price}
                </div>
                <button className="lb-btn-open">Open case</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}