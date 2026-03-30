import React, { useState } from 'react';
import { battlesData } from './LatestBattlesData';
import './LatestBattles.css';

// ✅ Import your image
import fencingIcon from "../../assets/latestbattles/fencing.png";
import fencingTitle from "../../assets/latestbattles/fencing-title.png";

const LatestBattles = () => {
  const [showAll, setShowAll] = useState(false);

  // Price formatter
  const renderPrice = (priceStr) => {
    const [whole, decimal] = priceStr.split('.');
    return (
      <div className="price-value">
        ${whole}
        <span className="price-decimal">.{decimal || '00'}</span>
      </div>
    );
  };

  // ✅ Control visible cards
  const visibleBattles = showAll
    ? battlesData.slice(0, 10)
    : battlesData.slice(0, 6);

  return (
    <div className="battles-container">
      {/* Header */}
      <div className="battles-header">
       <div className="header-title">
  <div className="vs">
    <img src={fencingTitle} alt="vs" />
  </div>
  <span>Latest Battles</span>
</div>

        {/* Toggle Button */}
        <button
          className="view-all-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>

      <div className="battle-list">
        {visibleBattles.map((battle) => (
          <div key={battle.id} className="battle-row">

            {/* Players */}
            <div className="players-box">
              <div className="avatar-group">
                <img src={battle.players[0]} alt="p1" />
                <img src={battle.players[1]} alt="p2" />
              </div>

              {/* ✅ UPDATED ICON */}
              <div className="vs-divider">
                <img src={fencingIcon} alt="vs" />
              </div>

              <div className="avatar-group">
                <img src={battle.players[2]} alt="p3" />
                <img src={battle.players[3]} alt="p4" />
              </div>
            </div>

            {/* Items */}
            <div
              className="items-display"
              style={{
                backgroundColor: `${battle.themeColor}22`,
                border: `1px solid ${battle.themeColor}66`
              }}
            >
              {battle.items.map((box, index) => (
                <div key={index} className="item-box">
                  <img src={box} alt="case" />
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="action-area">
              {renderPrice(battle.price)}
              <button className="open-case-btn">Open case</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBattles;