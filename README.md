# Raslen Guesmi — Portfolio

Personal portfolio site for **Raslen Guesmi**, AI Engineer (LLM fine-tuning, reinforcement
learning, MLOps).

## Stack

Plain HTML / CSS / vanilla JS — no build step. Fonts from Google Fonts, icons from Font Awesome.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page content: hero, about, skills, experience timeline, projects, education, contact |
| `style.css` | Design tokens (dark + light themes), layout and components |
| `mediaqueries.css` | Responsive breakpoints (1200 / 1024 / 900 / 620 / 400 px) |
| `script.js` | Project data + rendering, filters & search, theme toggle, typewriter, scroll effects |
| `assets/` | Photos, project screenshots, CV PDF |
| `assets/covers/` | Generated SVG cover art for projects without a screenshot |

## Editing content

- **Projects** live in the `projects` array at the top of `script.js`. Each entry takes
  `title`, `description`, `image`, `domain`, `role`, optional `badge` / `pro`, `github`, `demo`
  and `keywords`. Leaving `github` or `demo` empty renders a "Private" pill instead of a button.
- **Filter buttons** are in `index.html` under `#projects`; a button's `data-filter` value must
  match the `domain` / `role` value used in `script.js`.
- **Experience** is hand-written markup in the `#experience` timeline.
- **CV**: `assets/Raslen_Guesmi_CV_AIEngineer.pdf` (also kept as `assets/CV_Raslen_Guesmi.pdf`).

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
