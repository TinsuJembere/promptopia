# 📝 Proptopia

A full-stack **prompt sharing app** built with **Next.js 13 (App Router)**, **NextAuth.js**, and **MongoDB**.  
Users can **create, edit, delete, and share AI prompts**, search by **prompt text, tag, or username**, and explore other users’ profiles.

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

## 📂 Project Structure

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

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 13 (App Router, Server/Client Components)  
- **Backend**: Next.js API routes  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: NextAuth.js (Google OAuth)  
- **Styling**: Tailwind CSS  

---

## ⚙️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/your-username/proptopia.git
cd proptopia
2. Install dependencies
npm install

3. Set up environment variables

Create a .env.local file in the root directory:

MONGODB_URI=your-mongodb-uri
GOOGLE_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any-random-secret

4. Run development server
npm run dev


App will run on http://localhost:3000
.

🔑 Usage

Sign in with Google

Create a new prompt via /create-prompt

Search prompts using the search bar (by text, tag, or username)

Click a tag to filter feed

Click a username to view their profile and posts

Edit/Delete your own prompts in your profile
📌 Roadmap

 Like & save prompts

 Pagination / infinite scroll

 Dark mode
