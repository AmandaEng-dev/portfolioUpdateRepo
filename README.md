# Portfolio Website

A modern, responsive portfolio website for a graduate Computer Information Technology student aspiring to be a software developer.

## Features

- **Clean, minimalist design** with editorial-inspired layout
- **Modern typography** using Playfair Display (serif) and Inter (sans-serif)
- **Custom color palette** with carefully selected colors
- **Responsive design** that works on all devices
- **Smooth animations** and hover effects
- **Scroll-triggered animations** for enhanced user experience
- **Project showcase** with tech stack and links
- **Resume download** functionality

## Design

- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**:
  - Background: #F0F7EE
  - Accent 1: #C4D7F2
  - Accent 2: #6A6B83
  - Accent 3: #594A26
  - Dark: #210203

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Adding Your Resume

1. Replace `public/resume.pdf` with your actual resume
2. Update the contact information in `src/components/Footer.jsx`
3. Update the project information in `src/components/Projects.jsx`

### Updating Project Information

Edit the `projects` array in `src/components/Projects.jsx` to showcase your actual projects.

### Contact Information

Update the contact details in `src/components/Footer.jsx`:
- Email address
- Phone number
- Social media links

## Technologies Used

- React 18
- Vite
- CSS3 with custom properties
- Intersection Observer API for animations
- Responsive design principles

## License

This project is open source and available under the [MIT License](LICENSE).