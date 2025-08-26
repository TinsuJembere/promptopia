# Proptopia - Modern Real Estate Platform

Proptopia is a cutting-edge real estate platform built with Next.js, MongoDB, and Tailwind CSS. This application provides a seamless experience for property browsing, searching, and management.

you can watch it live on https://promptopia-lo4p.vercel.app/

## 🚀 Features

- **Modern UI/UX** built with Tailwind CSS
- **Server-side Rendering** for optimal performance
- **Authentication** with NextAuth.js
- **Database** powered by MongoDB and Mongoose
- **Responsive Design** that works on all devices
- **Fast Refresh** for smooth development experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel (recommended)

## 📦 Prerequisites

- Node.js 18.0.0 or later
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/proptopia.git
   cd proptopia
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

## 🏗️ Project Structure

```
proptopia/
├── app/                 # App Router
├── components/          # Reusable components
├── models/              # Database models
├── public/              # Static files
├── styles/              # Global styles
└── utils/               # Utility functions
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Deployed on [Vercel](https://vercel.com/)

---

Made with ❤️ by Tinsae
