# Facebook Login Page Clone

A responsive frontend recreation of the **Facebook login interface**, developed with **Angular, TypeScript, HTML, and CSS**.

The project focuses on accurately translating an existing interface into a responsive web implementation while maintaining consistent layout, typography, spacing, and component behavior across desktop, tablet, and mobile viewports.

> **Disclaimer:** This project is an independent frontend implementation created for educational and portfolio purposes. It is not affiliated with, endorsed by, or connected to Facebook or Meta.

---

## Overview

The Facebook Login Page Clone demonstrates the implementation of a modern, responsive authentication interface using Angular.

Rather than relying on a single fixed layout, the interface adapts its structure and presentation according to the available screen size. Dedicated responsive behavior was implemented for desktop, tablet, and mobile devices.

The project focuses exclusively on frontend design and interaction. It does not collect, process, transmit, or authenticate real Facebook credentials.

## Features

* Responsive Facebook-inspired login interface
* Desktop, tablet, and mobile layouts
* Adaptive two-column desktop structure
* Mobile-optimized layout
* Floating input labels
* Responsive authentication form
* Create Account interface
* Forgot Password interface
* Language and footer sections
* Custom image and SVG assets
* Flexible spacing and alignment
* CSS Flexbox and Grid layouts
* Viewport-specific responsive styling

## Technology Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| Angular 21   | Frontend framework            |
| TypeScript   | Application logic             |
| HTML5        | Interface structure           |
| CSS3         | Styling and responsive design |
| CSS Flexbox  | Component alignment           |
| CSS Grid     | Layout composition            |
| Angular CLI  | Development and build tooling |
| Git & GitHub | Version control               |

## Responsive Design

The interface was developed with multiple viewport configurations rather than simply scaling the desktop version.

### Desktop

The desktop layout uses a two-column structure containing the visual/branding section and authentication interface.

### Tablet

Spacing, component dimensions, typography, and content positioning are adjusted for medium-sized displays.

### Mobile

The interface transitions into a compact mobile layout optimized for smaller screens and touch interaction.

Primary responsive breakpoints include:

```css id="2g1qxp"
/* Desktop */
@media (min-width: 1024px) {
    /* Desktop layout */
}

/* Tablet */
@media (max-width: 930px) {
    /* Tablet layout */
}

/* Mobile */
@media (max-width: 620px) {
    /* Mobile layout */
}
```

## Project Structure

```text id="npgpxe"
Facebook-Login-Page/
│
├── public/
│   └── assets/
│       ├── Main.png
│       ├── communication.png
│       └── ...
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   └── ...
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
└── README.md
```

## Local Development

### Prerequisites

Ensure that Node.js and Angular CLI are installed.

```bash id="nftmv4"
node --version
ng version
```

### Clone the Repository

```bash id="wrd8sj"
git clone https://github.com/Mariam-N1/Facebook-Login-Page.git
cd Facebook-Login-Page
```

### Install Dependencies

```bash id="v42onp"
npm install
```

### Start Development Server

```bash id="pzq0vs"
ng serve
```

The application will be available locally at:

```text id="f0jz9j"
http://localhost:4200
```

## Production Build

Create an optimized production build with:

```bash id="4emlka"
ng build
```

The generated production files will be available in the Angular build output directory.

## Deployment

The project supports static deployment through **GitHub Pages**.

After creating a production build, the generated frontend can be deployed as a static Angular application.

## Implementation Focus

This project demonstrates practical frontend development in several areas:

**Responsive UI Engineering**
The interface adapts across multiple viewport sizes while maintaining visual consistency.

**Layout Recreation**
An existing interface was analyzed and translated into reusable HTML/CSS structures rather than reproduced as a static image.

**CSS Architecture**
Flexbox, Grid, media queries, spacing rules, and responsive sizing are combined to manage complex layouts.

**Angular Development**
The interface is implemented within Angular's component-based application structure.

**Asset Management**
Images and SVG assets are organized and served through the application's public asset structure.

## Security Notice

This repository is a **UI demonstration only**.

It does not implement Facebook authentication and should not be used to collect or process Facebook usernames, passwords, access tokens, or other credentials.

For applications requiring Facebook authentication, developers should use Meta's official authentication services rather than recreating credential collection.

## Author

**Hafiza Mariam Nadeem**

Computer Science
Frontend & Full-Stack Development

GitHub: `Mariam-N1`

---

**Project Type:** Frontend / Responsive UI Implementation
