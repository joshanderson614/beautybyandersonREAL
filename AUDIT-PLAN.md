# Beauty by Anderson – Audit & Implementation Plan

## 1) Project structure audit
- **Framework:** Plain HTML/CSS/JS (static, no React/Vite/Next)
- **Routing:** File-based; pages: index.html, services.html, reviews.html, about.html, team.html, book.html
- **Book:** book.html exists with Call (tel), Text (sms), and request form – routes meaningfully
- **Duplication:** Navbar, Footer, Contact block duplicated across all 6 HTML files

## 2) Files edited
- index.html – meta, schema, skip link, why-choose (5 proofs), accessibility
- services.html – categories, bullets, More details, NAP, meta
- reviews.html – expand/collapse, standardize cards, Google CTA, NAP
- about.html – Our philosophy, Our expertise, NAP, meta
- team.html – “Additional stylists” note, NAP
- book.html – Call/Text icons, NAP, meta
- styles.css – typography, map size, service-details, review styles, footer-nap
- accessibility.css – new; focus states, skip link
- transitions.js – (existing) sticky nav, page transitions, mobile CTA
