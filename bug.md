# Bug Report - Smart TaxiPark Portfolio

| ID | Page / Feature        | Steps to Reproduce | Expected Outcome | Actual Outcome | Severity / Status |
|----|------------------------|--------------------|-----------------|----------------|-------------------|
| 1  | Navigation Links       | Click each nav link (Home, Problem, Solution, Team, Contact) | Smooth scroll to correct section | Works correctly | Low / Fixed |
| 2  | Team Rendering         | Load the Team section | All 6 member cards display with photo, role, bio, contribution | Murtada’s photo missing (broken link) | Medium / Open |
| 3  | Hover Effect           | Hover over team photos | Blue border appears on hover, disappears on mouseout | Works correctly | Low / Fixed |
| 4  | Contact Form Validation | Submit empty form | Error messages shown | Error messages shown | Low / Fixed |
| 5  | Contact Form Validation | Submit valid form (name, email, message ≥10 chars) | Success confirmation + message saved in localStorage | Success alert shown, message saved | Low / Fixed |
| 6  | Cross-Browser          | Open site in Chrome, Firefox, mobile browser | Layout and features consistent | Firefox: layout slightly misaligned | Medium / Open |
| 7  | Responsiveness         | Test on iPhone SE (375px), iPad (768px), Desktop (1280px) | Layout adapts correctly | Works correctly | Low / Fixed |
| 8  | Accessibility          | Run Lighthouse audit | Accessibility score ≥ 80 | Score = 78 | High / Open |
| 9  | Network                | Check DevTools Network tab | No 404 errors, load time acceptable | One 404 error for missing solution diagram | High / Open |
