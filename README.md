# MVP Image Gallery

A beautiful, responsive image gallery built with React, TypeScript, and Tailwind CSS, demonstrating clean MVP (Model-View-Presenter) architecture principles.

![Image Gallery Preview](https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

- **🏗️ Clean MVP Architecture** - Proper separation of concerns with Model, View, and Presenter layers
- **🖼️ Interactive Image Gallery** - Grid layout with hover animations and smooth transitions
- **🔍 Category Filtering** - Filter images by Nature, City, People, or view All
- **💡 Lightbox Modal** - Full-screen image viewing with navigation controls
- **⌨️ Keyboard Navigation** - Arrow keys for navigation, Esc to close lightbox
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **🎨 Modern Design** - Beautiful UI with Tailwind CSS and Lucide React icons
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mvp-image-gallery.git
   cd mvp-image-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the gallery

## 🏗️ Architecture

This project follows the **MVP (Model-View-Presenter)** architectural pattern:

### 🟢 Model (`src/models/`)
- **GalleryModel.ts** - Manages application state and data
- Handles image data, filtering logic, and lightbox state
- Implements observer pattern for state updates

### 🔵 View (`src/components/`)
- **Gallery.tsx** - Main gallery container component
- **ImageGrid.tsx** - Displays images in responsive grid
- **FilterButtons.tsx** - Category filter controls
- **Lightbox.tsx** - Full-screen image modal

### 🟣 Presenter (`src/presenters/`)
- **GalleryPresenter.ts** - Handles user interactions and business logic
- Manages keyboard shortcuts and navigation
- Coordinates between Model and View layers

## 📁 Project Structure

```
src/
├── components/          # React components (View layer)
│   ├── Gallery.tsx
│   ├── ImageGrid.tsx
│   ├── FilterButtons.tsx
│   └── Lightbox.tsx
├── models/             # Data models (Model layer)
│   └── GalleryModel.ts
├── presenters/         # Business logic (Presenter layer)
│   └── GalleryPresenter.ts
├── types/              # TypeScript type definitions
│   └── gallery.ts
├── App.tsx            # Root component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

## 🎮 Usage

### Navigation
- **Click** on any image to open the lightbox
- **Arrow Keys** - Navigate between images in lightbox
- **Escape Key** - Close the lightbox
- **Filter Buttons** - Click to filter images by category

### Categories
- **All** - Show all images
- **Nature** - Landscape and nature photography
- **City** - Urban and architectural photos
- **People** - Portrait and people photography

## 🎨 Customization

### Adding New Images
Edit `src/models/GalleryModel.ts` and add new image objects to the `getInitialImages()` method:

```typescript
{
  id: 'unique-id',
  url: 'https://your-image-url.jpg',
  caption: 'Your Image Caption',
  category: 'Nature', // or 'City', 'People'
  alt: 'Alt text for accessibility'
}
```

### Adding New Categories
1. Update the `FilterCategory` type in `src/types/gallery.ts`
2. Add the new category to the filter buttons in `src/components/FilterButtons.tsx`
3. Update the color scheme for the new category

### Styling
The project uses Tailwind CSS. Customize colors, spacing, and animations by modifying the component classes or extending the Tailwind configuration in `tailwind.config.js`.

## 📱 Responsive Design

The gallery is fully responsive with breakpoints:
- **Mobile**: Single column grid
- **Tablet**: Two column grid
- **Desktop**: Three column grid

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images provided by [Pexels](https://www.pexels.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/mvp-image-gallery](https://github.com/yourusername/mvp-image-gallery)

---

⭐ If you found this project helpful, please give it a star on GitHub!