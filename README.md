# 📸 BlogApp-Backend API's

This is a **backend project** built using **Node.js, Express, and MongoDB**, providing essential features for a **social media platform** where users can create posts, like/unlike them, and comment on posts.

## 🚀 Features
- 📝 **Create a Post** - Users can create and publish posts.
- 👍 **Like & Unlike a Post** - Users can like or unlike posts.
- 💬 **Comment on a Post** - Users can add comments to posts.
- 🗑️ **Delete a Post** - Users can delete their own posts.
- 🔍 **Retrieve All Posts** - Get all posts with likes and comments.
- 🔄 **RESTful API Design** - Clean and structured API endpoints.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB & Mongoose

## 📌 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Saurabhsaxena81/BlogApp-Backend.git
   cd BlogApp-Backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string

   ```

4. **Start the server:**
   ```sh
   npm start
   ```

## 📡 API Endpoints

### 📝 Posts
- `POST /api/posts` - Create a new post
- `GET /api/posts` - Get all posts
- `DELETE /api/posts/:id` - Delete a post by ID

### 👍 Likes
- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/unlike` - Unlike a post

### 💬 Comments
- `POST /api/posts/:id/comment` - Comment on a post
- `GET /api/posts/:id/comments` - Get all comments on a post

## 📂 Folder Structure
```
📂 BlogApp-Backend
 ┣ 📂 models
 ┃ ┗ 📜 Post.js        # Post model
 ┣ 📂 routes
 ┃ ┗ 📜 postRoutes.js  # Routes for posts, likes, and comments
 ┣ 📂 config
 ┃ ┗ 📜 db.js          # Database connection setup
 ┣ 📂 middleware
 ┃ ┗ 📜 auth.js        # JWT authentication middleware
 ┣ 📜 .env.example     # Example environment variables
 ┣ 📜 server.js        # Main server file
 ┣ 📜 package.json     # Dependencies and scripts
```

## 📦 Dependencies
- express - Minimalist web framework
- mongoose - ODM for MongoDB
- dotenv - Manage environment variables
## 🚀 Deployment
To deploy the application, use platforms like:
- **Heroku**
- **Render**
- **Railway**
- **Vercel (for serverless functions)**

## 🔮 Future Enhancements
- 📌 Implement user authentication and profiles
- 🔄 Add support for image uploads in posts
- 📊 Integrate pagination for better performance
- 🛡️ Improve security with rate-limiting & input validation


---
