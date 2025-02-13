# HTML Boilerplate (Vite + Vanilla JS)

This is a modern HTML boilerplate using Vite + Vanilla JavaScript with SCSS support. It provides a fast and minimal setup for web development.

## 📌 Features
- **Vite** for a fast and lightweight development environment
- **Vanilla JavaScript** with ES Modules
- **SCSS support** for modular styles
- **Live reload** for quick development
- **Pre-configured npm scripts** for development and build

## 📂 Folder Structure
```sh
/html-boilerplate
│── index.html         # Main HTML file
│── vite.config.js     # Vite configuration
│── package.json       # Dependencies and scripts
│── .gitignore         # Git ignore file
│── /src
│   │── main.js        # Main JavaScript file
│   │── /scss
│   │   ├── main.scss  # Main SCSS file
│   │   ├── _variables.scss # SCSS Variables
│   │   ├── _common.scss # Common styles
│   │── /css
│   │   ├── main.css (Auto-generated)
│── /public
│   │── favicon.ico
```
```

## 🚀 Quick Start

### 1. Clone the repository
```sh
git clone https://github.com/your-username/html-boilerplate.git
cd html-boilerplate
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start the development server
```sh
npm run dev
```

### 4. Compile SCSS manually (optional)
```sh
npm run sass
```

### 5. Build for production
```sh
npm run build
```

## 🔧 Configuration

### Vite
The `vite.config.js` file handles the development server settings. Modify it if needed.

### SCSS
Modify styles in `src/scss/` and run `npm run sass` to compile.

## 📜 License

This project is licensed under the MIT License.