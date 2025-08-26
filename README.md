# 📝 Proptopia

A full-stack **prompt sharing app** built with **Next.js 13 (App Router)**, **NextAuth.js**, and **MongoDB**.  
Users can **create, edit, delete, and share AI prompts**, search by **prompt text, tag, or username**, and explore other users’ profiles.

you can watch live on https://promptopia-lo4p.vercel.app/

---

## 🚀 Features

- 🔐 **Authentication** with Google (via NextAuth.js)  
- 👤 **Personalized profiles** – view your own posts and manage them  
- ✏️ **CRUD for prompts** – create, edit, and delete AI prompts  
- 🔎 **Search functionality**:
  - Search by **prompt**
  - Search by **tag**
  - Search by **username**
- 🏷️ **Clickable tags** – filter feed by tags  
- 🌍 **View other profiles** – explore prompts by other users  

---

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
    MONGODB_URI=your-mongodb-uri
    GOOGLE_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=any-random-secret
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
│
├── app/
│ ├── api/
│ │ ├── auth/ # NextAuth.js authentication routes
│ │ ├── prompt/ # Prompt API routes
│ │ │ ├── [id]/ # Single prompt (GET, PATCH, DELETE)
│ │ │ └── new/ # Create new prompt
│ │ └── users/[id]/posts/ # Fetch prompts by user
│ │
│ ├── create-prompt/ # Page to create new prompts
│ ├── update-prompt/ # Page to edit prompts
│ ├── profile/ # User profile page
│ ├── layout.jsx # App layout
│ └── page.jsx # Home page (feed)
│
├── components/
│ ├── Feed.jsx # Main feed with search
│ ├── Form.jsx # Form for creating/editing prompts
│ ├── Nav.jsx # Navigation bar
│ ├── Profile.jsx # Profile layout (used for self + others)
│ ├── PromptCard.jsx # Individual prompt card
│ └── Provider.jsx # Session provider (NextAuth)
│
├── models/
│ ├── prompt.js # Prompt schema
│ └── user.js # User schema
│
├── utils/
│ └── database.js # MongoDB connection
│
└── README.md
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

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Deployed on [Vercel](https://vercel.com/)

---

Made with ❤️ by Tinsae
