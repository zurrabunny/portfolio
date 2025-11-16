---
title: "My thought process on making this website"
date: "2025-11-15"
description: "I'm gonna yap about the process of how this website came to be !!"
tags: ["Process"]
---

<h3>storytime >:]</h3>

<div class="decorated-img">
  <img src="devlog/expressions/coffe.png" alt="Something cool">
</div>

<pe>It's really easy for me to make a static-looking website where all of the text and data you'd need
to know about me are already displayed in front of you without any intervention, but I know to myself that
reading a bunch of words on a screen can be a chore sometimes, especially when it isn't accompanied with
visuals and diagrams and all that.<br><br>

So I decided to challenge myself (and to aid myself) by making this website as visually informative as I can, filled with
dropdown menus, image tags, website tabs, and (my personal favourite) the Goal Map I used for my "Growth and Goals" tab.<br><br>

I have ADHD, and it affects how I interpret information in front of me. BIG, LONG texts are always my weakness (unless I myself typed them out).
So I've spent more than 2 weeks putting everything I've mentioned above into reality. The most complex ones (the Goal Map) took at least 3 days of
non-stop coding and testing, making sure it works on both PC and mobile..<br><br>

I am thankful that I managed to push through all of those obstacles. I do get a very clean layout of who I am in return. This website
almost embodies who I truly am, and I really think that's neat :]<br><br>

The other website makers I've tried are either visually messy (unwanted visuals / watermarks) or functionally limiting, and if I
really want to express who I am and what I'm like, it's best that I do that from scratch.</pe>

<style>
pe {
  margin-top: 0rem;
  color: var(--text-dark);
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: justify; /* makes text fully justified */
}

/* Image floats to the upper right, text wraps around */
.decorated-img {
  float: right;
  margin: 0 0 1rem 1rem; /* top 0, right 0, bottom 1rem, left 1rem */
  max-width: 40%;        /* controls size relative to container */
}

.decorated-img img {
  width: 100%;           /* fill the floated container */
  height: auto;
  border: 3px solid var(--color-3); /* border color */
  border-radius: 16px;              /* rounded edges */
  padding: 4px;                     /* optional inner spacing */
  display: block;                   /* block so it fits container */
}
</style>