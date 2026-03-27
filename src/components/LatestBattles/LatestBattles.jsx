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

              {/* TOP ROW — boxes */}
              <div className="lb-card-top">
                <div className="lb-items">
                  {battle.items.map((itemImg, idx) => (
                    <div className="lb-item-box" key={idx}>
                      <img src={itemImg} alt="" />
                    </div>
                  ))}
                  <div className="lb-end-space" />
                </div>
              </div>

              {/* BOTTOM ROW — players + price + button */}
              <div className="lb-card-bottom">

                {/* PLAYERS */}
                <div className="lb-players">
                  <img src={battle.players[0]} className="lb-avatar" alt="" />
                  <img src={battle.players[1]} className="lb-avatar" alt="" />

                  <div className="lb-vs">⚔️</div>

                  <img src={battle.players[2]} className="lb-avatar" alt="" />
                  <img src={battle.players[3]} className="lb-avatar" alt="" />
                </div>

                {/* ACTIONS */}
                <div className="lb-actions">
                  <span className="lb-price">${battle.price}</span>
                  <button className="lb-btn-open">Open case</button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}