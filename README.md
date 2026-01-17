# Django & Python Developer Portfolio

A modern, high-performance developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio is optimized for Vercel deployment with static site generation (SSG).

## 🚀 Features

- **Modern UI/UX**: Clean, premium developer-focused design with smooth animations
- **Dark/Light Mode**: System preference detection with manual toggle
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Static export for fast loading times
- **SEO Friendly**: Comprehensive metadata, OpenGraph, and Twitter cards
- **Accessible**: ARIA labels and keyboard navigation support
- **Smooth Animations**: Framer Motion for engaging user experience
- **Form Validation**: React Hook Form for contact form

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Theme**: next-themes

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd measdev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out` directory, ready for deployment.

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Click "New Project"**

4. **Import your repository**

5. **Configure the project**:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (or `yarn build`)
   - Output Directory: `out`
   - Install Command: `npm install` (or `yarn install`)

6. **Click "Deploy"**

The deployment will be automatic on every push to your main branch.

## 📝 Customization

### Update Personal Information

1. **Name and Title**: Edit `app/page.tsx` and `components/sections/hero.tsx`
2. **About Section**: Update `components/sections/about.tsx`
3. **Skills**: Modify the `skillCategories` array in `components/sections/skills.tsx`
4. **Projects**: Update the `projects` array in `components/sections/projects.tsx`
5. **Experience**: Edit the `experiences` array in `components/sections/experience.tsx`
6. **Contact Info**: Update contact links in `components/sections/contact.tsx` and `components/footer.tsx`
7. **SEO Metadata**: Modify `app/layout.tsx` for OpenGraph and Twitter cards

### Theme Colors

Edit `tailwind.config.ts` to customize the primary color scheme.

### Contact Form Integration

The contact form is currently a frontend-only implementation. To integrate with a backend:

1. Create an API endpoint (e.g., using Vercel Serverless Functions or external service)
2. Update the `onSubmit` function in `components/sections/contact.tsx`

Example with API route:
```typescript
const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setSubmitStatus('success');
      reset();
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 📂 Project Structure

```
measdev/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer component
│   ├── scroll-to-top.tsx   # Scroll to top button
│   └── theme-provider.tsx  # Theme context provider
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies
```

## 🎨 Design Features

- **Glassmorphism**: Subtle glass effects on cards and navbar
- **Gradient Backgrounds**: Animated gradient blobs in hero section
- **Smooth Scrolling**: Native smooth scroll behavior
- **Scroll Animations**: Elements animate into view on scroll
- **Hover Effects**: Interactive hover states on buttons and links
- **Responsive Typography**: Fluid typography that scales with screen size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or inquiries, please reach out through the contact form on the website or via email.

---

Built with ❤️ using Next.js 14 and TypeScript