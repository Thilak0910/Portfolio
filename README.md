

<h1 align="center"> Thilak D's Portfolio 🔥 </h1>
<h3 align="center"> A clean, beautiful, responsive, and customizable portfolio <br /> showcasing my skills and projects </h3>

<p align="center">
  <a href="https://nodejs.org/en/blog/release/v20.11.1"><img alt="NodeJS" src="https://img.shields.io/badge/node-20.11.1-important?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/npm/v/10.2.4"><img alt="NPM" src="https://img.shields.io/badge/npm-10.2.4-blueviolet?style=flat-square" /></a>
  <a href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
  <br/>
  <a href="http://badges.mit-license.org/"><img alt="License" src="http://img.shields.io/:license-mit-blue.svg?style=flat-square" /></a>
  <a href="http://badges.mit-license.org/"><img alt="Website" src="https://img.shields.io/badge/website-up-yellow?style=flat-square" /></a>
  <a href="https://img.shields.io/badge/price-free-ff69b4"><img alt="Price" src="https://img.shields.io/badge/price-free-ff69b4?style=flat-square" /></a>
</p>

# Portfolio Sections 📚

✔️ Summary and About me\
✔️ Skills \
✔️ Projects\
✔️ Experience\
✔️ Certifications 🏆\
✔️ Education\
✔️ Contact me

# Features

- Modern and clean UI design
- Fully responsive layout
- Multiple theme options
- Dynamic GitHub project integration
- Contact form with EmailJS integration
- Easy customization

# Getting Started 🚀

## Prerequisites

- Node.js (version 20.11.1 or higher)
- npm (version 10.2.4 or higher)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory
   ```bash
   cd portfolio
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

# Customization ✏️

## Personal Information

Edit the `src/portfolio.js` file to update your personal information, including:

- Profile details
- Social media links
- Skills
- Experience
- Education
- Projects
- Contact information

## Themes

You can choose from several pre-defined themes or create your own by editing the `src/theme.js` file:

1. Open `src/theme.js`
2. At the bottom of the file, change `export const chosenTheme = blueTheme;` to your preferred theme
3. Available themes: `blueTheme`, `brownTheme`, `purpleTheme`, `greenTheme`, `redTheme`, `blackTheme`, `pinkTheme`

## Splash Screen

To disable the splash screen animation:

1. Open `src/portfolio.js`
2. Find the settings section at the top
3. Set `isSplash: false`

```javascript
// Website related settings
const settings = {
  isSplash: false,
};
```

# Deployment 📦

## GitHub Pages

1. Update the `homepage` field in `package.json` to `https://yourusername.github.io`
2. Run `npm run build`
3. Deploy the build folder to GitHub Pages

## Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set the build command to `npm run build`
4. Set the publish directory to `build`

# Technologies Used 🛠️

- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Base Web UI](https://github.com/uber/baseweb)
- [React Reveal](https://www.react-reveal.com/)
- [Styled Components](https://styled-components.com/)
- [EmailJS](https://www.emailjs.com/)

# License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

---

<p align="center">Designed and developed with ❤️ by Thilak D</p>
