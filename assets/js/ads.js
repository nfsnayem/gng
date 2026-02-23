/* ══════════════════════════════════════
   MASTER AD & AFFILIATE CONTROLLER
   Edit everything here. It will update the whole site instantly.
══════════════════════════════════════ */

const SITE_ADS = {

 /* ─── MAIN CONTENT LEADERBOARDS ─── */
  "main-ad-top": `
    <div class="ldr-ad"><span>Advertisement — 728 × 90 Leaderboard</span></div>
  `,
  "main-ad-mid-1": `
    <div class="mid-ad"><span>Advertisement — 728 × 90</span></div>
  `,
  "main-ad-mid-2": `
    <div class="mid-ad"><span>Advertisement — 728 × 90</span></div>
  `,
  "main-ad-mid-3": `
    <div class="mid-ad"><span>Advertisement — 728 × 90</span></div>
  `,
  "main-ad-bot": `
    <div class="ldr-ad" style="margin-bottom:0"><span>Advertisement — 728 × 90 Leaderboard</span></div>
  `,

  /* ─── LEFT SIDEBAR ─── */
  "left-ad-1": `<div class="ad" style="min-height:250px"><div class="ad-ico">📢</div><div class="ad-tag">Ad</div><div class="ad-dim">160 × 250</div></div>`,
  "left-aff-1": `
    <div class="aff">
      <div class="aff-head" style="background:linear-gradient(135deg,#ff4136,#ff764c)">🎮 Garena FF</div>
      <div class="aff-body">
        <div class="aff-badge">Sponsored</div>
        <div class="aff-desc">Get Free Fire Diamonds instantly at the best rates.</div>
        <a class="aff-btn" style="background:#ff4136" href="#">Top Up Now →</a>
      </div>
    </div>
  `,
  "left-ad-2": `<div class="ad" style="min-height:180px"><div class="ad-ico">🎯</div><div class="ad-tag">Ad</div><div class="ad-dim">160 × 180</div></div>`,
  "left-aff-2": `
    <div class="aff">
      <div class="aff-head" style="background:linear-gradient(135deg,#1a6fc4,#00b4d8)">⚡ NordVPN</div>
      <div class="aff-body">
        <div class="aff-badge">Recommended</div>
        <div class="aff-desc">Lower ping. Block DDoS. 68% off + 3 months free.</div>
        <a class="aff-btn" style="background:#1a6fc4" href="#">Get Deal →</a>
      </div>
    </div>
  `,
  "left-ad-3": `<div class="ad" style="min-height:200px"><div class="ad-ico">📣</div><div class="ad-tag">Ad</div><div class="ad-dim">160 × 200</div></div>`,
  "left-aff-3": `
    <div class="aff">
      <div class="aff-head" style="background:linear-gradient(135deg,#7c4dff,#e040fb)">💎 G2A</div>
      <div class="aff-body">
        <div class="aff-badge">Hot Deal</div>
        <div class="aff-desc">Cheap game keys & gift cards. Save up to 80%.</div>
        <a class="aff-btn" style="background:#7c4dff" href="#">Shop Keys →</a>
      </div>
    </div>
  `,

  /* ─── RIGHT SIDEBAR ─── */
  "right-ad-1": `<div class="ad" style="min-height:250px"><div class="ad-ico">📢</div><div class="ad-tag">Ad</div><div class="ad-dim">160 × 250</div></div>`,
  "right-aff-1": `
    <div class="aff">
      <div class="aff-head" style="background:linear-gradient(135deg,#f7971e,#ff5e62)">⚡ Razer Gold</div>
      <div class="aff-body">
        <div class="aff-badge">Trending</div>
        <div class="aff-desc">Buy Razer Gold & get 10% bonus credits.</div>
        <a class="aff-btn" style="background:#ff5e62" href="#">Get Credits →</a>
      </div>
    </div>
  `,
  "right-ad-2": `<div class="ad" style="min-height:180px"><div class="ad-ico">🎯</div><div class="ad-tag">Ad</div><div class="ad-dim">160 × 180</div></div>`,
  "right-aff-2": `
    <div class="aff">
      <div class="aff-head" style="background:linear-gradient(135deg,#5865F2,#7289da)">🎮 Discord Nitro</div>
      <div class="aff-body">
        <div class="aff-badge">New</div>
        <div class="aff-desc">Custom tags, animated avatars & HD streaming.</div>
        <a class="aff-btn" style="background:#5865F2" href="#">Get Nitro →</a>
      </div>
    </div>
  `,
  "right-ad-3": `<div class="ad" style="min-height:200px"><div class="ad-ico">📣</div><div class="ad-tag">Ad</div><div class="ad-dim">160 × 200</div></div>`,
  "right-aff-3": `
    <div class="aff">
      <div class="aff-head" style="background:linear-gradient(135deg,#11998e,#38ef7d)">💳 PayPal</div>
      <div class="aff-body">
        <div class="aff-badge">Limited Offer</div>
        <div class="aff-desc">Get $10 cashback on your first gaming purchase.</div>
        <a class="aff-btn" style="background:#009cde" href="#">Claim $10 →</a>
      </div>
    </div>
  `
};

/* ══════════════════════════════════════
   INJECTION LOGIC
══════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  // Loop through all ads in the config and inject them
  for (const [id, code] of Object.entries(SITE_ADS)) {
    const slot = document.getElementById(id);
    if (slot) {
      slot.innerHTML = code.trim();
    }
  }

  /* Uncomment this block if you paste Google AdSense code above!
  setTimeout(() => {
    const adCount = document.querySelectorAll('.adsbygoogle').length;
    for(let i = 0; i < adCount; i++) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, 500);
  */
});