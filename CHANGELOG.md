# CHANGELOG

All notable changes to the HYROX Calculator will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned for v1.1
- Percentile rank analysis (approximate)
- Station-by-station detailed comparison
- Local storage for record history
- Image export for Instagram Stories
- Pro division support

---

## [1.0.0] - 2025-03-03

### Added
- **Dark theme UI** with #000000, #FFFF00, #FF5722 color scheme
- **Two input modes**:
  - Beginner mode: 1km pace + total roxzone + total stations (3 inputs)
  - Advanced mode: 8 runs + 8 stations + roxzone (individual inputs)
- **Dropdown-based time input**: Click-only, no typing required
- **Real-time calculation**: Updates immediately on input change
- **Average comparison**: Based on 2025 Seoul (COEX) Open Singles data
  - Men: 01:27:59 (702 participants)
  - Women: 01:39:31 (352 participants)
- **Visual breakdown**: Run / Roxzone / Stations percentage bars
- **Automatic insights**: Identifies weakest segments and suggests improvements
- **Share functionality**: Copy result text for Instagram/KakaoTalk
- **SEO optimization**: 
  - Meta tags (title, description, keywords)
  - Open Graph tags (Facebook/KakaoTalk preview)
  - Twitter Card tags
  - Schema.org structured data
  - Canonical URL
- **Instagram integration**: Link to @hyrox.guide.kr in header and footer
- **Responsive design**: Mobile-first, works on all devices
- **Accessibility**: Semantic HTML, proper labels, keyboard navigation

### Technical
- Vanilla JavaScript (no dependencies)
- Pure CSS (no frameworks)
- Font Awesome icons
- Google Fonts (Inter)
- Netlify/Vercel deployment configs
- GitHub Pages support

### Data Sources
- Hybrid Athlete Club: https://hybridathleteclub.com/average-hyrox-times/season_8
- RaceKeep: https://racekeep.com/results/s8/seoul/
- HYRESULT: https://www.hyresult.com/event/s8-2025-seoul

---

## [0.1.0] - 2025-03-01 (Internal)

### Initial Development
- Basic HTML structure
- Light theme prototype
- Text input for times
- Simple calculation logic

---

[Unreleased]: https://github.com/yourusername/hyrox-calculator/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/yourusername/hyrox-calculator/releases/tag/v1.0.0
[0.1.0]: https://github.com/yourusername/hyrox-calculator/releases/tag/v0.1.0
