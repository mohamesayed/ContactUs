# Contact Page

A responsive contact page built with React and Material UI, featuring RTL (Right-to-Left) support for Arabic language.

## Features

- Responsive design that works on all screen sizes
- RTL support for Arabic language
- Modern UI components using Material UI
- Contact form with validation
- Social media integration
- WhatsApp, phone, and email contact methods

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contact-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- React 18
- Material UI 5
- Emotion (for styling)
- Vite (for build tooling)
- stylis-plugin-rtl (for RTL support)

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx
  │   ├── ContactHero.jsx
  │   ├── ContactMethods.jsx
  │   ├── ContactForm.jsx
  │   └── Footer.jsx
  ├── App.jsx
  └── main.jsx
```

## License

This project is licensed under the MIT License.
