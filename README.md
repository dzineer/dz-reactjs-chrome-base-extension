# React Base Chrome Extension

**Date**: September 2, 2023  
**Author**: Frank Decker

## Details

This is a React.js base Chrome extension skeleton that can be used to build any React-based Chrome extension.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Library Requirements](#library-requirements)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Introduction

This project serves as a skeleton for building Chrome extensions using React.js. It is set up with a Webpack configuration tailored for Chrome extension development.

---

## Prerequisites

- Node.js
- npm or yarn
- Webpack CLI
- Google Chrome

---

## Library Requirements

This project uses the following libraries and packages:

### Dev Dependencies

- `autoprefixer`: Adds vendor prefixes to CSS.
- `clean-webpack-plugin`: Cleans the build folder.
- `copy-webpack-plugin`: Copies static files to the build folder.
- `css-loader`: Loads CSS files.
- `dotenv-webpack`: Exposes environment variables.
- `html-webpack-plugin`: Generates HTML files.
- `path`: Handles file and directory paths.
- `postcss`: Post-processing of CSS.
- `postcss-loader`: PostCSS loader for Webpack.
- `style-loader`: Injects CSS into the DOM.
- `tailwindcss`: Utility-first CSS framework.
- `ts-loader`: TypeScript loader for Webpack.
- `typescript`: TypeScript compiler.
- `webpack`: Module bundler.
- `webpack-cli`: CLI for Webpack.

### Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.

---

## Installation

1. Clone the repository.

```bash
git clone https://github.com/dzineer/dz-reactjs-chrome-base-extension.git dz-new-chrome-extension
```

OR

Install the repository like this:

```bash
npx degit dzineer/dz-reactjs-chrome-base-extension dz-new-chrome-extension
cd dz-new-chrome-extension
```

2. Navigate to the project directory.

```bash
cd dz-new-chrome-extension
```

3. Run `npm install` or `yarn install` to install dependencies.
4. Run `webpack --mode development` to build the project.

5. Check the dist folder for the output files.

---

## Usage

1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable "Developer mode".
4. Click on "Load unpacked" and select the `dist` directory.
5. Your extension should now be loaded and ready for testing.

---

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

---

## License

This project is licensed under the MIT License.

---
