---
title: "Cool Website List"
date: "2026-1-25"
description: "a collection of cool websites i found + what they do :]"
pinned: true
tags: ["Misc"]
---

<div class="tool-grid">
  <div class="cool-site-card">
    <a href="https://www.cosmos.so/" target="_blank" class="card-inner">
      <div class="card-content">
        <div class="card-meta">
          <span class="brand-tag">Inspiration</span>
          <span class="url-text">cosmos.so</span>
        </div>
        <h3 class="card-title">Cosmos</h3>
        <p class="card-description">A Pinterest-style tool for visual inspiration without social media clutter.</p>
      </div>
      <div class="card-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </div>
    </a>
  </div>

  <div class="cool-site-card">
    <a href="https://docs.google.com/spreadsheets/u/1/d/1aJHCQSA2dFdu4Fy__T3yDyiNqO0jMUBcku0EjKX3SZI/htmlview?fbclid=IwAR1z2L91BbAP0P8OC8i6feCT0AM9_Ag9Bq1phhVjtvRo2UCMwy1z0j28_JA#gid=1656768414" target="_blank" class="card-inner">
      <div class="card-content">
        <div class="card-meta">
          <span class="brand-tag">Work Related</span>
          <span class="url-text">google sheets</span>
        </div>
        <h3 class="card-title">Animation Studio Reviews</h3>
        <p class="card-description">A Google Sheet Repository where Animators share reviews of companies they worked for (whether good or bad).</p>
      </div>
      <div class="card-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </div>
    </a>
  </div>

  <div class="cool-site-card">
    <a href="https://www.sakugabooru.com/" target="_blank" class="card-inner">
      <div class="card-content">
        <div class="card-meta">
          <span class="brand-tag">Inspiration</span>
          <span class="url-text">sakugabooru.com</span>
        </div>
        <h3 class="card-title">sakugabooru</h3>
        <p class="card-description">An imageboard-style website that archives, tags, and showcases scenes of 2D Japanese animation.</p>
      </div>
      <div class="card-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </div>
    </a>
  </div>
  
  <div class="cool-site-card">
    <a href="https://bdengine.app/" target="_blank" class="card-inner">
      <div class="card-content">
        <div class="card-meta">
          <span class="brand-tag">Creation</span>
          <span class="url-text">bdengine.app</span>
        </div>
        <h3 class="card-title">BDEngine</h3>
        <p class="card-description">A web based 3D modeller for Minecraft Display Entities.</p>
      </div>
      <div class="card-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
      </div>
    </a>
  </div>
	

</div>

<style>
  /* Grid Container */
  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 20px;
    padding: 1rem 0;
  }

  /* Shared Card Styles */
  .cool-site-card {
    display: flex;
  }

  .card-inner {
    display: flex;
    flex: 1; /* Ensures cards in the same row stay equal height */
    justify-content: space-between;
    align-items: flex-start; /* Better for multiline text */
    padding: 24px;
    text-decoration: none;
    background: transparent;
    border: 1px solid var(--color-4);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card-inner:hover {
    background: var(--color-9);
    border-color: var(--text-main);
  }

  .card-content {
    flex: 1;
    padding-right: 15px;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .brand-tag {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: var(--color-4);
    color: var(--text-main);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 700;
  }

  .url-text {
    font-size: 0.8rem;
    color: var(--color-4);
    font-family: monospace;
  }

  .card-title {
    margin: 0 0 8px 0;
    font-size: 1.1rem;
    color: var(--text-main);
    font-weight: 600;
  }

  .card-description {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-dark);
    line-height: 1.6;
    opacity: 0.85;
  }

  .card-arrow {
    width: 24px;
    height: 24px;
    color: var(--color-4);
    transition: all 0.3s ease;
    margin-top: 4px;
  }

  .card-inner:hover .card-arrow {
    color: var(--text-main);
    transform: translate(3px, -3px);
  }

  .card-arrow svg {
    width: 100%;
    height: 100%;
  }
</style>