# NEURAL — Muskan Waheed Portfolio

A premium, AI-inspired interactive portfolio built with HTML5, CSS3, and Vanilla JavaScript.

## 🚀 How to Open and Run
1. Download or clone this folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari).
3. For the best experience, use a local server (e.g., VS Code "Live Server" extension) to ensure video and asset paths load correctly.

## 🖼️ How to Replace My Profile Picture
1. Save your photo as `profile.jpg`.
2. Place it in the `assets/images/` folder.
3. The code is already set to look for `assets/images/profile.jpg`.

## 🎬 How to Add My Homepage Coding Video
1. Save your video as `hero-background.mp4`.
2. Place it in the `assets/videos/` folder.
3. The HTML is already configured to autoplay, mute, and loop this video.

## 📸 How to Replace Project Images
1. Navigate to `assets/images/projects/`.
2. You will find folders: `nova/`, `dineflow/`, and `learning-portal/`.
3. Save your generated mockup images into these respective folders.
4. Name them `mockup-1.jpg`, `mockup-2.jpg`, etc.

## 🖼️ How to Add Multiple Project Screenshots
1. In `js/projects.js`, find the `screenshots` array for your project.
2. Add more image paths to the array like this:  
   `screenshots: ["assets/images/projects/nova/1.jpg", "assets/images/projects/nova/2.jpg", "assets/images/projects/nova/3.jpg"]`

## 🎥 How to Add Project Demo Videos
1. Place your demo video in `assets/videos/projects/` (e.g., `nova-demo.mp4`).
2. In `js/projects.js`, find the project and update the `video` field:  
   `video: "assets/videos/projects/nova-demo.mp4"`

## 🔗 Exactly Where to Paste GitHub Links
1. Open `js/projects.js`.
2. Find the project you want to update.
3. Locate the line: `github: ""`
4. Paste your URL between the quotes: `github: "https://github.com/yourusername/repo"`

## 🔗 Exactly Where to Paste Live Demo Links
1. Open `js/projects.js`.
2. Find the project you want to update.
3. Locate the line: `liveDemo: ""`
4. Paste your URL between the quotes: `liveDemo: "https://yourdemo.com"`
*(Note: If left empty, the button will automatically hide.)*

## ➕ How to Add a New Project
1. In `js/projects.js`, copy an existing project object `{ ... }` inside the `projectsData` array.
2. Paste it at the end of the array (before the closing `]`).
3. Update the `id`, `title`, `category`, `description`, `technologies`, and image paths.
4. Create a new folder in `assets/images/projects/your-new-project/` for its images.

## 📱 How to Update Social Media Links and Email
1. Open `index.html`.
2. Scroll to the `<!-- Contact Section -->` and `<!-- Footer -->`.
3. Update the `href` attributes for LinkedIn, GitHub, and Instagram with your actual profile URLs.
4. The email is already set to `mlefty120@gmail.com`.

## 🌐 How to Deploy on GitHub Pages or Netlify
**GitHub Pages:**
1. Create a new repository on GitHub.
2. Push all these files to the repository.
3. Go to Settings > Pages.
4. Select the `main` branch and `/root` folder, then click Save.

**Netlify:**
1. Log in to Netlify.
2. Drag and drop the entire `neural-portfolio` folder into the Netlify deploy area.
3. Your site will be live instantly with a free `.netlify.app` domain.

---
*Building with creativity. Developing with purpose.*