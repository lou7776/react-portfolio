# React Portfolio

A personal developer portfolio built with React and TypeScript. It's a single-page site that shows my skills, projects, and career history, with smooth-scroll navigation and a dark/light mode toggle.

**Live Site**: https://YOUR-USERNAME.github.io/react-portfolio-template**

## Features

- Single-page layout with smooth-scroll navigation
- Dark and light mode toggle
- Responsive design, with a slide-out menu on mobile
- Expertise section with tech-stack chips
- Project cards with thumbnails and links
- Vertical timeline for career history
- Fade-in animation when the page loads

## Built with

- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/) for the navigation bar, buttons, and icons
- Sass (SCSS) for styling
- [Font Awesome](https://fontawesome.com/) icons
- [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline) for the career history
- Create React App (`react-scripts`)

## Getting started

You'll need [Node.js](https://nodejs.org/) (LTS version) and npm.

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/react-portfolio-template.git

# Move into the project folder
cd react-portfolio-template

# Install dependencies
npm install

# Start the development server
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000) and reloads automatically when you save a file.

## Project structure

```
src/
├── components/     Page sections: Main, Expertise, Project, Timeline, Navigation, Footer
├── assets/
│   ├── images/     Project thumbnails and photos
│   └── styles/     One SCSS file per component
└── App.tsx         Page layout and dark/light mode
```

## Customizing

- **Content:** edit the files in `src/components` (name, bio, skills, projects, career history).
- **Images:** replace the files in `src/assets/images`.
- **Menu links:** edit the `navItems` list in `src/components/Navigation.tsx`.
- **Section order:** rearrange the components in `src/App.tsx`.

## Deployment

The site is deployed with GitHub Pages.

1. In `package.json`, set `"homepage"` to your own URL: `https://YOUR-USERNAME.github.io/react-portfolio-template`
2. If it isn't installed yet, add the deploy tool: `npm install --save-dev gh-pages`
3. Build and publish:

```bash
npm run deploy
```

Then, in your GitHub repo, go to **Settings → Pages** and make sure the site is served from the `gh-pages` branch.

## Credits

Based on [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) by Yuji Sato, released under the MIT License.
